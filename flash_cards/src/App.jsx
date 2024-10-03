import './App.css';
import { useState } from 'react';
import Flashcards from './FlashCards';

const App = () => {
  const cardSetTitle = "Geography Quiz";
  const cardSetDescription = "Test your knowledge of countries and their capitals!";
  
  const cards = [
    { question: "France", answer: "Paris", difficulty: "easy" },
    { question: "Canada", answer: "Ottawa", difficulty: "easy" },
    { question: "Japan", answer: "Tokyo", difficulty: "easy" },
    { question: "Germany", answer: "Berlin", difficulty: "easy" },
    { question: "Brazil", answer: "Brasília", difficulty: "easy" },
    { question: "Italy", answer: "Rome", difficulty: "easy" },

    { question: "Norway", answer: "Oslo", difficulty: "medium" },
    { question: "Argentina", answer: "Buenos Aires", difficulty: "medium" },
    { question: "Egypt", answer: "Cairo", difficulty: "medium" },
    { question: "Mexico", answer: "Mexico City", difficulty: "medium" },
    { question: "Australia", answer: "Canberra", difficulty: "medium" },
    { question: "South Africa", answer: "Pretoria", difficulty: "medium" },
    
    { question: "Kazakhstan", answer: "Nur-Sultan", difficulty: "hard" },
    { question: "Madagascar", answer: "Antananarivo", difficulty: "hard" },
    { question: "Belarus", answer: "Minsk", difficulty: "hard" },
    { question: "Mozambique", answer: "Maputo", difficulty: "hard" },
    { question: "New Zealand", answer: "Wellington", difficulty: "hard" },
    { question: "Kyrgyzstan", answer: "Bishkek", difficulty: "hard" }
  ];

  const totalCards = cards.length;

  const [currentCard, setCurrentCard] = useState(cards[0]); 
  const [showQuestion, setShowQuestion] = useState(true);   
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleCardClick = () => {
    setShowQuestion(!showQuestion);
  };

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentCard(filteredCards[randomIndex]);
    setShowQuestion(true);
  };

  const handleFilterCards = (difficulty) => {
    if (difficulty === "all") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(cards.filter(cards => cards.difficulty === difficulty));
    }
    setFilteredCards(filtered);
    setCurrentCard(filtered[0]);
    setShowQuestion(true);
  };

  return (
    <div className="App">
      <h1>{cardSetTitle}</h1>
      <p>{cardSetDescription}</p>
      <p>Total Cards: {filteredCards.length}</p>

      <div className="button-group">
        <button onClick={() => handleFilterCards("all")}>All</button>
        <button onClick={() => handleFilterCards("easy")}>Easy</button>
        <button onClick={() => handleFilterCards("medium")}>Medium</button>
        <button onClick={() => handleFilterCards("hard")}>Hard</button>
      </div>

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