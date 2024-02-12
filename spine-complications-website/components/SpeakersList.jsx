// components/SpeakersList.js
import Speaker from "./Speaker";

const SpeakersList = ({ speakers }) => {
  return (
    <div>
      <section id="faculty">
        <div
          className="section-title text-center"
          style={{ paddingTop: 50, paddingBottom: 1 }}
        >
          <h1>Fakülte</h1>
        </div>
        {speakers.map((speaker, index) => (
          <Speaker
            key={index}
            name={speaker.name}
            title={speaker.title}
            bio={speaker.bio}
            imageUrl={speaker.imageUrl}
          />
        ))}
      </section>
    </div>
  );
};

export default SpeakersList;
