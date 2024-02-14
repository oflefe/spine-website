import React from "react";
import SingleEvent, { Event } from "./SingleEvent";
import { eventList2, eventList3, eventList4, eventList5 } from "@/constants";

type Schedule = {
  eventList: Event[];
};

export default function Schedule({ eventList }: Schedule) {
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
          {/* SECTION 1 */}
          <p>
            <strong>
              Dejeneratif Omurga Cerrahisinde Komplikasyonlar ve Yönetimi
            </strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Mehmet Zileli, Mehmet Aydoğan
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {eventList.map(
                  (
                    {
                      time,
                      eventName,
                      presentation,
                      discussion,
                      omitPresentation,
                    },
                    index
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          {/* SECTION 2 */}
          <p>
            <strong>
              Omurga Deformitelerinde Cerrahi Komplikasyonlar ve Yönetimi
            </strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Emre Acaroğlu, Onur Yaman
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
                    index
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          {/* SECTION 3 */}
          <p>
            <strong>
              Omurga Tümörleri Cerrahisinde Komplikasyonlar ve Yönetimi
            </strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Kemal Koç, Önder Ofluoğlu
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
                    index
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          {/* SECTION 4 */}
          <p>
            <strong>Olgu Tartışmaları-Dejeneratif-Deformite-Tümör</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Mehmet Zileli, Ender Ofluoğlu
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
                    index
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          {/* SECTION 5 */}
          <p>
            <strong>Olgu Tartışmaları-Dejeneratif-Deformite-Tümör</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Serdar Kahraman, Salim Şentürk
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
                    index
                  ) => (
                    <SingleEvent
                      key={index}
                      time={time}
                      eventName={eventName}
                      presentation={presentation}
                      omitPresentation={omitPresentation}
                      discussion={discussion}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
