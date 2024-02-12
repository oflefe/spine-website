import React from "react";

export default function Schedule() {
  return (
    <>
      <section id="program" className="schedule-section pt-150 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="section-title mb-60 text-center">
                <h1>Upcoming Events</h1>
                <p>
                  Explore our schedule to stay informed about our latest events,
                  workshops, and seminars.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="event-schedule">
                <div className="single-event d-flex align-items-center">
                  <div className="event-time">
                    <span>Feb 2, 2024</span>
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="event-name" style={{ textAlign: "start" }}>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                  </div>
                </div>

                <div className="single-event d-flex align-items-center">
                  <div className="event-time" style={{ textAlign: "start" }}>
                    <span>Feb 5, 2024</span>
                    <span>02:00 PM - 04:00 PM</span>
                  </div>
                  <div className="event-name">
                    <h3>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </h3>
                  </div>
                </div>

                <div className="single-event d-flex align-items-center">
                  <div className="event-time">
                    <span>Feb 10, 2024</span>
                    <span>01:00 PM - 03:00 PM</span>
                  </div>
                  <div className="event-name">
                    <h3>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
