import React from 'react';
import './FlashCards.css';

const Flashcards = ({ card, showQuestion, onClick }) => {
  const cardClass = `card ${card.difficulty}`;

    return (
      <div className="card" onClick={onClick}>
        <h2>{showQuestion ? card.question : card.answer}</h2>
      </div>
    );
};

export default Flashcards;