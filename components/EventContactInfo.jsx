// components/EventContactInfo.js
import React from "react";
import styles from "@/styles/EventContactInfo.module.css"; // Assuming CSS Module usage for styling

const EventContactInfo = ({ emails, numbers, address, mapUrl }) => {
  return (
    <section id="contact">
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          <p>
            <strong>Email: </strong>
            {emails.map((email, index) => (
              <a key={index} href={`mailto:${email}`} style={{ marginLeft: 5 }}>
                {email}
              </a>
            ))}
          </p>
          <p>
            <strong>Phone:</strong>
            {numbers.map((phone,index) => (
              <a key={index} href={`tel:${phone}`} style={{ marginLeft: 5 }}>
                {phone}
              </a>
            ))}
          </p>
          {/* <p>
            <strong>Address:</strong> <span>{address}</span>
          </p> */}
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src={mapUrl}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventContactInfo;
