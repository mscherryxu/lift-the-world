import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";

const contacts = [
  {
    name: "Nicole Hong",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E03AQH0MhShnu4r_A/profile-displayphoto-shrink_400_400/0/1658867372014?e=1668038400&v=beta&t=S7Ha1giy8_-f7GrKr-AzIBWxSUKZLaBRp4eXJl7Theg",
    github: "https://github.com/nickyjhong",
    linkedin: "https://www.linkedin.com/in/nicolejhong/",
    personal: "https://nicolehong.dev",
  },
  {
    name: "Cherry Xu",
    image:
      "https://media-exp1.licdn.com/dms/image/D4E03AQHNsmSXEPD5rw/profile-displayphoto-shrink_800_800/0/1664555998479?e=1675296000&v=beta&t=MdpbhaddZaJVOI4oZAmsy63FRrpkc7rmUd_W7r7GXLA",
    github: "https://github.com/mscherryxu",
    linkedin: "https://www.linkedin.com/in/cherryxu-rdcdn/",
    personal: "https://cherryxu.dev",
  },
  {
    name: "Ryan Scoville",
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQFdR4lLk2KT3g/profile-displayphoto-shrink_800_800/0/1661710087030?e=1668038400&v=beta&t=G3LDxufb2PG-LezSQ4jqZyOhwlYTH_ImGZGByH5AWBg",
    github: "https://github.com/rscoville29",
    linkedin: "https://www.linkedin.com/in/ryan-scoville/",
  },
  {
    name: "Kyle Parkinson",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E03AQErE6TRASNA3g/profile-displayphoto-shrink_800_800/0/1636141078706?e=1668038400&v=beta&t=cZdeq655sOu8j8uUh3JpwOFUa-t18atKDe0EE74_X2s",
    github: "https://github.com/kparki1130",
    linkedin: "https://www.linkedin.com/in/kyle-e-parkinson/",
  },
];

export default function Contact() {
  return (
    <div className="contact-container">
      <p className="contact-heading">Meet the Team</p>
      <div className="contact-members-container">
        {contacts.map((contact) => {
          return (
            <div className="contact-single-container" key={contact.name}>
              <div className="contact-pic-container">
                <img src={contact.image} className="contact-pic" />
                <p className="contact-info contact-name">{contact.name}</p>
              </div>
              <div className="contact-info-container">
                <a href={contact.github}>
                  <i className="fa-brands fa-github" />
                </a>
                <a href={contact.linkedin}>
                  <i className="fa fa-linkedin-square fa-social linkedin" />
                </a>
                {contact.personal ? (
                  <a href={contact.personal}>
                    <FontAwesomeIcon icon={faIdCardAlt} className="id-alt" />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
