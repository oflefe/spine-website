// components/EventContactInfo.js
import React from "react";
import styles from "@/styles/EventContactInfo.module.css"; // Assuming CSS Module usage for styling

const EventContactInfo = ({ email, phone, address, mapUrl }) => {
  return (
    <section id="contact">
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactInfo}>
          {email && (
            <p>
              <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </p>
          )}
          {phone && (
            <p>
              <strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a>
            </p>
          )}
          {address && (
            <p>
              <strong>Address:</strong> {address}
            </p>
          )}
        </div>
        {mapUrl && (
          <div className={styles.mapContainer}>
            <iframe
              src={mapUrl}
              width="500"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventContactInfo;
