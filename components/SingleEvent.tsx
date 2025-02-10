import React from "react";

export type Event = {
  time: string;
  eventName: string;
  omitPresentation?: boolean;
  presentation: {
    speaker: string;
  };
  discussion: {
    speaker: string;
  };
};

export default function SingleEvent({
  time,
  eventName,
  presentation,
  discussion,
  omitPresentation,
}: Event) {
  return (
    <div className="single-event">
      <div className="event-time">
        <span>{time}</span>
      </div>
      <div className="event-details-container">
        <div className="event-name">
          <h3>{eventName}</h3>
        </div>
        <div className="event-detail presentation">
          {/* {!omitPresentation && <span>Olgu sunumu (5dk) </span>} */}
          <span className="speaker">{presentation.speaker}</span>
        </div>
        <div className="event-detail discussion">
          {/* {!omitPresentation && (
            <span>Nasıl önleyelim? Nasıl Yönetelim (10 dk)</span>
          )} */}
          <span className="speaker">{discussion.speaker}</span>
        </div>
      </div>
    </div>
  );
}
