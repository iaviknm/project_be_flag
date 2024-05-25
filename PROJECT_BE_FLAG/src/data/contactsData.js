import {
  faEnvelope,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const contactsData = {
  title: "Contactos",

  contactIcons: [
    {
      id: 1,
      icon: faLocationDot,
      contact: "Av. de Moscavide 26C, 1885-010, Moscavide",
    },

    {
      id: 2,
      icon: faEnvelope,
      contact: "retrosariadabia26c@gmail.com",
    },

    {
      id: 2,
      icon: faMobile,
      contact: "+351 965 803 028",
    },
  ],

  socialIcons: [
    {
      id: 1,
      icon: faInstagram,
      link: "https://www.instagram.com/retrosaria_da_bia?igsh=Y3NtMnlxczd0MXlw",
    },

    {
      id: 2,
      icon: faFacebook,
      link: "https://www.facebook.com/p/Retrosaria-da-Bia-100057589083987/",
    },
  ],
};

export default contactsData;
