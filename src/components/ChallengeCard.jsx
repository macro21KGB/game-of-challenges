import {useRef, useState} from 'react';


const ChallengeCard = () =>  {

	const cardRef = useRef(null);
	const [test,setTest] = useState("");

	const handleClick = () => {
		cardRef.current.classList.add('flip-card-toggle');
		setTest("test");
	};


	return (
	<div class="flip-card">
  <div ref={cardRef} onClick={handleClick} class="flip-card-inner">
    <div class="flip-card-front">
	<p>Front</p>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
	    <p>{test}</p>
    </div>
  </div>
</div>
	);

}


export default ChallengeCard;
