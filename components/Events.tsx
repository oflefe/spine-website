import React from "react";

const Schedule = () => {
  const events = [
    {
      time: "08:30-08:45",
      title: "Komplikasyon mu, hata mı?",
      speaker: "Mehmet Zileli",
    },
    {
      time: "08:45-09:00",
      title: "Yanlış seviye cerrahisi nasıl önlenir?",
      speaker: "Murat Baloğlu",
    },
    {
      time: "09:00-09:15",
      title: "Lomber disk cerrahisi komplikasyonları",
      details:
        "Olgu Sunumu (5 dk) - Barış Çöllüoğlu, Nasıl önleyelim? Nasıl yönetelim? (10 dk) - Salim Şentürk",
    },
    {
      time: "09:15-09:30",
      title: "Lomber dar kanal cerrahisi komplikasyonları",
      details:
        "Olgu sunumu (5 dk) - Serdar Ercan, Nasıl Önleyelim? Nasıl Yönetelim (10 dk) - Adnan Demirci",
    },
    {
      time: "09:30-09:45",
      title: "Lomber füzyon cerrahisi (Dejeneratif skolyoz) komplikasyonları",
      details:
        "Olgu sunumu (5 dk) - Erdinç Özek, Nasıl Önleyelim? Nasıl Yönetelim (10 dk) - Erkin Sönmez",
    },
  ];

  return (
    <div>
      <h2>Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Title</th>
            <th>Speaker</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.time}</td>
              <td>{event.title}</td>
              <td>{event.speaker}</td>
              <td>{event.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
