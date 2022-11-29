import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";

const contacts = [
  {
    name: "Nicole Hong",
    image: `/public/images/profilePics/nicky.jpeg`,
    github: "https://github.com/nickyjhong",
    linkedin: "https://www.linkedin.com/in/nicolejhong/",
    personal: "https://nicolehong.dev",
  },
  {
    name: "Cherry Xu",
    image: `/public/images/profilePics/cherry.jpeg`,
    github: "https://github.com/mscherryxu",
    linkedin: "https://www.linkedin.com/in/cherryxu-rdcdn/",
    personal: "https://cherryxu.dev",
  },
  {
    name: "Ryan Scoville",
    image: "https://avatars.githubusercontent.com/u/85287770?v=4",
    github: "https://github.com/rscoville29",
    linkedin: "https://www.linkedin.com/in/ryan-scoville/",
  },
  {
    name: "Kyle Parkinson",
    image: "https://avatars.githubusercontent.com/u/101378922?v=4",
    github: "https://github.com/kparki1130",
    linkedin: "https://www.linkedin.com/in/kyle-e-parkinson/",
  },
];

export default function Contact() {
  return (
    <div className="contact-container">
      <p className="contact-heading">Meet the Team</p>
      <div className="contact-members-container">
        {contacts
          ? contacts.map((contact) => {
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
                        <FontAwesomeIcon
                          icon={faIdCardAlt}
                          className="id-alt"
                        />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
}
