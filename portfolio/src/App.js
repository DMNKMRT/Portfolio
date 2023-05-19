import logo from './logo.svg';
import './App.css';
import React from 'react';
import personImage from './person.png'; // Replace 'person.jpg' with your image file name


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={personImage} alt="Person" className="person-image" />
        <div className="intro-text">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a Cyber Security Engineer specializing in web application security.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
