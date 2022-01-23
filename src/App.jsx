import ChallengeCard from "./components/ChallengeCard/ChallengeCard";

const App = () => {
  const styles = {
    padding: "20px",
  };

  return (
    <div className="App" style={styles}>
      <ChallengeCard challengeText="Gioca con una sola mano" />
    </div>
  );
};

export default App;
