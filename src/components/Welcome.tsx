import picture from "../assets/picture.webp";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={picture} alt="Gokhan Turgut" />
      <p>
        Hi, I'm Gökhan Turgut self taught full stack developer with a passion to learn
        everything computer related! I'm always available to collaborations and
        opportunities to projects with an ethical aim.
      </p>
    </div>
  );
};

export default Welcome;
