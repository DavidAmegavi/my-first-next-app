import React from "react";

type typeFlashCard = {
  id: number;
  question: string;
  answer: string;
};

type typeFlashCardProps = {
  flashcard: typeFlashCard;
};

const Flashcard: React.FC<typeFlashCardProps> = ({ flashcard }) => {
  const [swap, setSwap] = React.useState(false);
  return (
    <div className="card">
      <div className="container">
        <div className="card-body" onClick={() => setSwap(!swap)}>
          {swap ? flashcard.answer : flashcard.question}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
