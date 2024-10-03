import './App.css';
import { useState } from 'react';
import Flashcards from './FlashCards';

const App = () => {
  const cardSetTitle = "Geography Quiz";
  const cardSetDescription = "Test your knowledge of countries and their capitals!";
  
  const cards = [
    { question: "France", answer: "Paris" },
    { question: "Brazil", answer: "Brasília" },
    { question: "Japan", answer: "Tokyo" },
    { question: "Canada", answer: "Ottawa" }
  ];

  const totalCards = cards.length;

  const [currentCard, setCurrentCard] = useState(cards[0]); 
  const [showQuestion, setShowQuestion] = useState(true);   

  const handleCardClick = () => {
    setShowQuestion(!showQuestion);
  };

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * totalCards);
    setCurrentCard(cards[randomIndex]);
    setShowQuestion(true); 
  };

  return (
    <div className="App">
      <h1>{cardSetTitle}</h1>
      <p>{cardSetDescription}</p>
      <p>Total Cards: {totalCards}</p>

      <Flashcards
        card={currentCard} 
        showQuestion={showQuestion} 
        onClick={handleCardClick} 
      />

      <button onClick={handleNextCard}>Next Card</button>
    </div>
  )
}

export default App