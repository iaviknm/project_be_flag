import "./Contacts.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactsData from "../../data/contactsData";
import Geolocation from "../../components/geolocation/Geolocation";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <h1 className="title">{contactsData.title}</h1>
        <div className="row">
          <div className="contacts__info">
            {contactsData.contactIcons.map((data) => {
              return (
                <p key={data.id}>
                  <span className="icons">
                    <FontAwesomeIcon fixedWidth icon={data.icon} />
                  </span>
                  {data.contact}
                </p>
              );
            })}

            <div className="contacts__info-social">
              {contactsData.socialIcons.map((data) => {
                return (
                  <a
                    key={data.id}
                    href={data.link}
                    target="_blank"
                    className="contacts__info-social_a"
                  >
                    <button className="icons">
                      <FontAwesomeIcon fixedWidth icon={data.icon} />
                    </button>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contacts__geolocation">
            <Geolocation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
