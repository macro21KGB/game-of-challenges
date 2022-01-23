import { useRef, useState } from "react";
import "./ChallengeCard.css";
// @ts-ignore
import cardLogo from "./card.png";

const ChallengeCard = ({ challengeText }) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [challenge, setChallenge] = useState(challengeText);

  const handleClick = () => {
    if (isFlipped) return;
    setIsFlipped(true);
    cardRef.current.classList.toggle("flipped");
  };

  return (
    <div className="flip-card">
      <div ref={cardRef} onClick={handleClick} className="flip-card-inner">
        <div className="flip-card-front">
          <img src={cardLogo} alt="LOGO" />
        </div>
        <div className="flip-card-back">
          <h6>{challenge}</h6>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
