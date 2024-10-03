import React from 'react';
import './FlashCards.css';

const Flashcards = ({ card, showQuestion, onClick }) => {
  const cardClass = `cards ${card.difficulty}`;

    return (
      <div className={cardClass} onClick={onClick}>
        <h2>{showQuestion ? card.question : card.answer}</h2>
      </div>
    );
};

export default Flashcards;