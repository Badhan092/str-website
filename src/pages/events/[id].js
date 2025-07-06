import React from "react";
import { useRouter } from "next/router";
import Events from "@/data/events";

const EventDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const event = Events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container top-space">
      <img src={event.image} alt={event.title} className="detail-image" />
      <div className="detail-content">
        <p className="date">{event.date}</p>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetailsPage;
