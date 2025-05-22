"use client";
import React, { useState, useEffect } from "react";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const tabs = [
  {
    id: "tab1",
    title: "Sustainability",
    image: "/img/banner/sustainable.png",
    content:
      "We are committed to eco-friendly processes that reduce waste and conserve energy. " +
      "Our production prioritizes low-impact dyes and sustainable raw materials. " +
      "We continuously innovate to lower our carbon footprint across operations. " +
      "Sustainability is not a trend for us — it's a responsibility we uphold daily.",
  },
  {
    id: "tab2",
    title: "Trustworthy",
    image: "/img/banner/trustworthy.jpeg",
    content:
      "Trust is at the heart of every partnership we build and every fabric we deliver. " +
      "We maintain full transparency across sourcing, production, and delivery. " +
      "Our customers rely on us for consistency, honesty, and long-term commitment. " +
      "With STR, you gain a dependable partner you can count on every step of the way.",
  },
  {
    id: "tab3",
    title: "Responsibility",
    image: "/img/banner/reliablity.png",
    content:
      "Responsibility defines our operations — from timely delivery to product excellence. " +
      "We uphold strict quality control measures across every production batch. " +
      "Our global clients value our consistency, accuracy, and on-schedule performance. " +
      "With STR, you're assured of dependable results without compromise.",
  },
];

const STRTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  useEffect(() => {
    AOS.refresh(); 
  }, [activeTab]);
  

  return (
    <div className="section">
      <div className="container">
        <div className="tab-container">
          <div className="tab-column" data-aos="fade-up">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {activeTab === tab.id && (
                  <span className="tab-icon">
                    <PiArrowBendDoubleUpRightBold />
                  </span>
                )}
                <span className="tab-first-letter">{tab.title.charAt(0)}</span>
                {tab.title.slice(1)}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="tab-image" data-aos="fade-up">
              <img src={currentTab.image} alt={currentTab.title} />
              <div className="img-background"></div>
            </div>
            <div className="tab-text" data-aos="fade-up">
              <h2>{currentTab.title}</h2>
              <p>{currentTab.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default STRTab;
