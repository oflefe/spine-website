// components/SpeakersList.js
import Speaker from "./Speaker";
import styles from "@/styles/SpeakersList.module.css"; // Assuming you'll create a SpeakersList.module.css

const SpeakersList = ({ speakers }) => {
  return (
    <div className={styles.speakersListContainer}>
      <section id="faculty">
        <div
          className="section-title text-center"
          style={{ paddingTop: 50, paddingBottom: 1 }}
        >
          <h1>Fakülte</h1>
        </div>
        <div className={styles.speakersGrid}>
          {speakers.map((speaker, index) => (
            <Speaker
              key={index}
              name={speaker.name}
              title={speaker.title}
              bio={speaker.bio}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpeakersList;
