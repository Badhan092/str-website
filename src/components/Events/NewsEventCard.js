import React from "react";
import Link from "next/link";

const Events = [
  {
    id: 1,
    title: "Pohela Boishakh office decoration",
    description:
      "Brighten up your workspace with traditional Boishakhi elements — alpana art, red-white drapes, flower garlands, and festive props that reflect the spirit of Bengali New Year.",
    date: "April 14, 2025",
    image: "/img/events/01.jpg",
  },
  {
    id: 2,
    title: "Boishakhi office lunch & cultural program",
    description:
      "Enjoy a special office lunch featuring panta bhaat, ilish, and festive sweets. A treat for all employees to celebrate the Bengali New Year together.",
    date: "April 14, 2025",
    image: "/img/events/02.jpg",
  },
  {
    id: 3,
    title: "Boishakhi office celebration",
    description:
      "End the day with a soulful evening of Baul songs, folk music, and cultural performances by colleagues to honor the spirit of Pohela Boishakh.",
    date: "April 14, 2025",
    image: "/img/events/03.jpg",
  },
];

const NewsEventCard = () => {
  return (
    <div className="container top-space">
      <h2 className="section-title">News & Events</h2>
      <div className="grid">
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
    </div>
  );
};

export default NewsEventCard;
