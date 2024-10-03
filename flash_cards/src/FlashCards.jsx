import React from 'react';
import './FlashCards.css';

const Flashcards = ({ card, showQuestion, onClick }) => {
  const cardClass = `cards ${card.difficulty}`;

    return (
      <div className={cardClass} onClick={onClick}>
        {showQuestion ? (
        <>
          <h2 className="title">Country</h2>
          <h2 className="country-title">{card.question}</h2> {}
        </>
      ) : (
        <>
          <h2 className="title">Capital</h2>
          <h2 className="capital-title">{card.answer}</h2> {}
        </>
      )}
      </div>
    );
};

export default Flashcards;