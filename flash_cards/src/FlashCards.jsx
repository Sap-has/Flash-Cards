import React from 'react';

const Flashcards = ({ card, showQuestion, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
        <h2>{showQuestion ? card.question : card.answer}</h2>
      </div>
    );
};

export default Flashcards;