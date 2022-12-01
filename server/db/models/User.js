const Sequelize = require("sequelize");
const { Op } = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Sprite = require("./Sprite");

const SALT_ROUNDS = 5;

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  totalWeight: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
    },
    defaultValue: 0,
  },
  level: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
    },
    defaultValue: 1,
  },
  selectedSprite: {
    type: Sequelize.STRING,
    defaultValue: "cat",
  },
});

module.exports = User;

User.prototype.correctPassword = function (candidatePwd) {
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_KEY);
};

User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({
    where: {
      username: {
        [Op.iLike]: `%${username}%`,
      },
    },
  });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT_KEY);
    const user = User.findByPk(id);
    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

const hashPassword = async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
User.addHook("afterCreate", async (user) => {
  const sprites = await Sprite.findAll({
    where: {
      isDefault: true,
    },
  });
  sprites.map((sprite) => {
    user.addSprite(sprite);
  });
});

module.exports = User;
