import React from "react";
import Link from "next/link";

const Events = [
  {
    id: 1,
    title: "Participate in the Bangladesh Edition of Textile Series of Expo 2025",
    description:
      "Bangladesh's thriving denim industry possesses unparalleled quality, versatility, and capacity. To promote these aspects of the industry and brand Bangladesh, The Bangladesh Denim Expo came into being in 2014. Today, this premier international platform is influencing sustainability, innovation, and creativity in the denim community worldwide. From STR Sourcing we always appreciate and get updated with the new technology, innovation.",
    date: "May 20, 2025",
    image: "/img/events/denim.jpg",
  },
  {
    id: 2,
    title: "Boishakhi office celebration  & cultural program",
    description:
      "End the day with a soulful evening of Baul songs, folk music, and cultural performances by colleagues to honor the spirit of Pohela Boishakh.",
    date: "April 14, 2025",
    image: "/img/events/03.jpg",
  },
  {
    id: 3,
    title: "Our team had the privilege of visiting the Exhibition organized (BTA).",
    description:
      "Our team had the privilege of visiting the Exhibition organized by the Bangladesh Tanners Association (BTA). The event brought together key stakeholders from the leather and tannery sector, showcasing the latest innovations, sustainable practices, and opportunities for future growth.",
    date: "June 21, 2025",
    image: "/img/events/leather.jpg",
  },
];

const NewsEventCard = () => {
  return (
    <>
      <h2 className="section-title">Events</h2>
      <div className="event-container">
        {Events.map((event) => (
          <Link href={`/events/${event.id}`}>
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="image" />
              <div className="content">
                <span className="date">{event.date}</span>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NewsEventCard;
