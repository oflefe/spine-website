import React from "react";
import SingleEvent, { Event } from "./SingleEvent";
import {
  eventList2,
  eventList3,
  eventList4,
  eventList5,
  eventList6,
  eventList7,
  eventList8,
} from "@/constants";

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
            <strong>ENSTRÜMANTASYON KOMPLİKASYONLARI</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Mehmet Zileli, Uygur Er
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
            <strong>DEJENERATİF OMURGA</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Kemal Koç, Suat Canbay
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
            <strong>PEDİATRİK OMURGA DEFORMİTELERİ</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Muharrem Yazıcı, Onur Yaman
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
            <strong>TÜMÖR CERRAHİSİ </strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Önder Ofluoğlu, Serdar Karaman
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
            <strong>ERİŞKİN DEFORMİTE CERRAHİSİ</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Mehmet Aydoğan, Ender Ofluloğlu
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
          {/* SECTION 6 */}
          <p>
            <strong>TRAVMA-OSTEOPOROTİK OMURGA</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Erkin Sönmez, Salim Şentürk
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {eventList6.map(
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
          {/* SECTION 7 */}
          <p>
            <strong>MİS</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Hakan Sabuncuoğlu, Oğuz
            Karaeminoğulları
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {eventList7.map(
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
          {/* SECTION 8 */}
          <p>
            <strong>ENFEKSİYON</strong>
          </p>
          <p>
            <strong>Moderatörler:</strong> Şükrü Çağlar, Aşkın Esen Hastürk
          </p>
          <div className="row justify-content-center event-container">
            <div className="col-lg-12">
              <div className="event-schedule">
                {eventList8.map(
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
