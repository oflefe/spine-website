import React from "react";
import SingleEvent, { Event } from "./SingleEvent";
import { eventList2, eventList3, eventList4, eventList5 } from "@/constants";

type Schedule = {
  eventList: Event[];
};

export default function Schedule({ eventList }: Schedule) {
  const openingEvents = eventList.slice(0, 2);
  const sessionOneEvents = eventList.slice(2);

  return (
    <>
      <section id="program" className="schedule-section pt-70 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="section-title mb-60 text-center">
                <h1>Program</h1>
              </div>
            </div>
          </div>

          {/* OPENING */}
          <p>
            <strong>AÇILIŞ</strong>
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {openingEvents.map(
                  (
                    {
                      time,
                      eventName,
                      presentation,
                      discussion,
                      omitPresentation,
                    },
                    index,
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* SECTION 1 */}
          <p>
            <strong>OTURUM 1 — TRAVMA / OSTEOPOROTİK OMURGA</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Mehmet Zileli – Mesut Mete
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {sessionOneEvents.map(
                  (
                    {
                      time,
                      eventName,
                      presentation,
                      discussion,
                      omitPresentation,
                    },
                    index,
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* SECTION 2 */}
          <p>
            <strong>OTURUM 2 — DEJENERATİF OMURGA</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Ömer Akçalı – Yusuf Duransoy
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {eventList2.map(
                  (
                    {
                      time,
                      eventName,
                      presentation,
                      discussion,
                      omitPresentation,
                    },
                    index,
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* SECTION 3 */}
          <p>
            <strong>OTURUM 3 — TÜMÖR ve ENFEKSİYON</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Serdar Kahraman – Yahya Güvenç
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {eventList3.map(
                  (
                    {
                      time,
                      eventName,
                      presentation,
                      discussion,
                      omitPresentation,
                    },
                    index,
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* SECTION 4 */}
          <p>
            <strong>OTURUM 4 — DEFORMİTE</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Onur Yaman – Numan Karaaslan
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {eventList4.map(
                  (
                    {
                      time,
                      eventName,
                      presentation,
                      discussion,
                      omitPresentation,
                    },
                    index,
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* SECTION 5 */}
          <p>
            <strong>OTURUM 5 — KATILIMCILARDAN GELEN KARIŞIK OLGULAR</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Salim Şentürk – Murat Baloğlu
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {eventList5.map(
                  (
                    {
                      time,
                      eventName,
                      presentation,
                      discussion,
                      omitPresentation,
                    },
                    index,
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
