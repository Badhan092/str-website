import React, {useEffect} from "react";
import { LuMapPinCheck, LuPhoneCall, LuTimer } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";


// Reusable component for each contact item
const ContactItem = ({ Icon, title, texts }) => (
  <div className="contactus-list__item" data-aos="fade-up">
    <div className="contactus-list__item__icon">
      <Icon />
    </div>
    <div className="contactus-list__item__title">{title}</div>
    {texts.map((text, index) => (
      <div className="contactus-list__item__text" key={index}>
        {typeof text === "string" ? (
          text
        ) : (
          <>
            {text.label && <strong>{text.label}</strong>} {text.value}
          </>
        )}
      </div>
    ))}
  </div>
);

const ContactUsList = () => {

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  

  const contactItems = [
    {
      Icon: LuMapPinCheck,
      title: "Our Address",
      texts: ["House: 1/B (5th Floor), Road: 10, Nikunja-2, Dhaka-1229, Bangladesh"],
    },
    {
      Icon: LuPhoneCall,
      title: "Contact",
      texts: [
        { label: "Mobile: ", value: "+880 1672916863,  +880 17 0692 2655" },
        { label: "Email: ", value: "info@strsourcing.com" },
      ],
    },
    {
      Icon: LuTimer,
      title: "Hours Of Operations",
      texts: ["Mon - Fri: 9am - 5pm", "Sat - Sun: 10am - 2pm"],
    },
  ];

  return (
    <div className="container">
      <div className="contactus-list">
        {contactItems.map((item, index) => (
          <ContactItem  key={index} {...item}  />
        ))}
      </div>
    </div>
  );
};

export default ContactUsList;
