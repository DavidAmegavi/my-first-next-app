import React from "react";
import FlashCardPrototype from "../../components/Flashcardprototype";
import data from "../../data/data";

import FlashCard from "../../components/Flashcard";

const Flashcard_mental: React.FC = () => {
  return <FlashCardPrototype data={data} />;
};

export default Flashcard_mental;
