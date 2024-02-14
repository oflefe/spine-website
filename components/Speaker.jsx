// components/Speaker.js
import styles from "@/styles/Speaker.module.css"; // Assuming you'll use CSS Modules for styling

const Speaker = ({ name }) => {
  return (
    <div className={styles.speaker}>
      <h3 className={styles.speakerName}>{name}</h3>
    </div>
  );
};

export default Speaker;
