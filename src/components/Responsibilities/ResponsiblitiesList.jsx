import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Reusable card component
const ResponsibilityCard = ({ title, items }) => (
  <div className="responsible-list-card" data-aos="fade-up">
    <div className="title-section">{title}</div>
    <div className="description-section">
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const ResponsibilitiesList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const responsibilities = [
    {
      title: "Sourcing",
      items: [
        "Find new factories / units for new and existing products",
        "Arrange for back-up factories for existing styles",
      ],
    },
    {
      title: "Sample Development",
      items: [
        "Manage the sample and approval process across all factories",
        "We provide sample support within two working weeks",
      ],
    },
    {
      title: "Merchandising",
      items: [
        "Liaise with factories on all production issues",
        "Communicate and report to customers on their production status and seek counsel on any issues",
      ],
    },
    {
      title: "Compliance",
      items: [
        "Devlope the compliance level in new factories to reach customer standards",
        "Maintain compliance level at all production factories ",
      ],
    },
    {
      title: "Quality Control",
      items: ["Provide in-line inspection at all factories", "Conduct final AQL"],
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="responsible-list">
          {responsibilities.map((res, index) => (
            <ResponsibilityCard key={index} title={res.title} items={res.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsibilitiesList;
