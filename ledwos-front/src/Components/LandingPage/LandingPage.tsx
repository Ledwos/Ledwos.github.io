import React from 'react';
import LandingPageName from '../Common/LandingPageName';
import Navigation from './Navigation/Navigation';

const LandingPage: React.FunctionComponent = () => {
  const scrollToSection = (section: string) => {
    document
      .querySelector(`.${section}`)
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='portfolio-landingPage portfolio-section'>
      <LandingPageName />
      <Navigation scrollToSection={scrollToSection} />
    </div>
  );
};

export default LandingPage;
