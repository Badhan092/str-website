import React from "react";
import { useRouter } from "next/router";
import Events from "@/data/events";

const EventDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const eventId = parseInt(id);
  const event = Events.find((e) => e.id === eventId);

  const relatedEvents = Events.filter((e) => e.id !== eventId);

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

      <div className="related-section">
        <h2 className="section-title">Related Events</h2>
        <div className="grid">
          {relatedEvents.map((relEvent) => (
            <div key={relEvent.id} className="event-card">
              <img src={relEvent.image} alt={relEvent.title} className="image" />
              <div className="detail-content">
                <p className="date">{relEvent.date}</p>
                <h3>{relEvent.title}</h3>
                <p>{relEvent.description.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
