import React from 'react';
import Navigation from './Navigation/Navigation';

const LandingPage: React.FunctionComponent = () => {
  const name = (
    <div className='NameBox'>
      <p className='Name'>Dan</p>
      <p className='Name'>Ledwos</p>
    </div>
  );

  const slideIntoViewComingSoon = () => {
    document
      .querySelector('.portfolio-comingSoon')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='portfolio-landingPage portfolio-section'>
      {name}
      <Navigation
        aScroll={slideIntoViewComingSoon}
        pScroll={slideIntoViewComingSoon}
        cScroll={slideIntoViewComingSoon}
      />
    </div>
  );
};

export default LandingPage;
