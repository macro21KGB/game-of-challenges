import { useRef, useState } from "react";
import confetti from 'canvas-confetti';

import "./ChallengeCard.css";
import cardLogo from "../../card.png";

const ChallengeCard = ({ challengeText, requestNewChallenge }) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isFlipped) {
      requestNewChallenge();
      confetti({
        particleCount: 100,
        spread: 360,
        origin: {
          x: 0.5,
          y: 0.5
        }
      })
    }

    setIsFlipped(!isFlipped);
    cardRef.current.classList.toggle("flipped");
    //spawn confetti in the center of the card

  };



  return (
    <div className="flip-card">
      <div ref={cardRef} onClick={handleClick} className="flip-card-inner">
        <div className="flip-card-front">
          <img src={cardLogo} alt="LOGO" />
        </div>
        <div className="flip-card-back">
          <h6>{challengeText}</h6>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
