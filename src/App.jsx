import ChallengeCard from "./components/ChallengeCard/ChallengeCard";
import NavBar from "./components/NavBar";
import { useState } from "react";
import './app.css';

const App = () => {

  const challenges = ["Fai un ballo di fortnite mentre giochi",
    "Gioca con una sola mano",
    "Gioca con il controller/mouse al contrario",
    "Capovolgete il controller e giocate cosi un turno/round/partita",
    "Se vinci, hai il diritto di vantarti quanto vuoi ma ogni volta che lo fai, dovrai regalare una vita/arma/vantaggio ad un giocatore a scelta",
    "Se parli, dovrai dare la vittoria al tuo avversario",
    "Cercate di sconfiggere l'avversario che ha piu colori addosso, o in IRL o in game",
    "Prendi la prima lettera del tuo nome e dividila per il numero di giocatori presenti, dovrai fare quelle uccisione in una partita",
    "[CARTA BONUS] Puoi fare quello che vuoi, molto semplice come 'sfida' ",
    "Il gioco si è appena trasformato in un 1V1, in caso foste già 1v1, potete pescare un altra carta",
    "in caso di un gioco sparatutto, imposta la sensibilità al minimo",
    "in caso di un gioco sparatutto, imposta la sensibilità al massimo",
    "Non potrai usare un pulsante su controller/mouse/tastiera, la scelta va agli altri giocatori"
  ];
  const [currentChallenge, setCurrentChallenge] = useState(" re-click the card to see your first challenge!");

  const extractNewCard = () => {
    const newCard = challenges[Math.floor(Math.random() * challenges.length)];
    setCurrentChallenge(newCard);
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <ChallengeCard challengeText={currentChallenge} requestNewChallenge={extractNewCard} />

      </div>
    </div>
  );
};

export default App;
