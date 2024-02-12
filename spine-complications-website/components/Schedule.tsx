import React from "react";

export default function Schedule() {
  return (
    <>
      <section id="program" className="schedule-section pt-150 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="section-title mb-60 text-center">
                <h1>Program</h1>
                <p>Kongremizin program detayları aşağıdaki gibidir</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="event-schedule">
                <div className="single-event d-flex align-items-center">
                  <div className="event-time">
                    <span>16 Mart 2024 </span> <br></br>
                    <span> 10:00 - 12:00</span>
                  </div>
                  <div className="event-name" style={{ textAlign: "start" }}>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                  </div>
                </div>

                <div className="single-event d-flex align-items-center">
                  <div className="event-time" style={{ textAlign: "start" }}>
                    <span>16 Mart 2024 </span>
                    <br></br>
                    <span> 13:00 - 15:00</span>
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
                    <span>16 Mart 2024</span>
                    <br></br>
                    <span>15:00 - 16:00</span>
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
