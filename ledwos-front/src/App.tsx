import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import './App.css';
import ComingSoon from './Components/ComingSoon';
import TestZone from './Components/TestZone';
import Career from './Components/Career/Career';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <LandingPage />
      <Career />
      <ComingSoon />
      <TestZone />
    </div>
  );
}

export default App;
