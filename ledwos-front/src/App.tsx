import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import './App.css';
import Career from './Components/Career/Career';
import About from './Components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <LandingPage />
      <About />
      <Career />
    </div>
  );
}

export default App;
