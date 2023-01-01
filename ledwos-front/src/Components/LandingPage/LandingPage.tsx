import React from 'react';

const LandingPage: React.FunctionComponent = () => {
  const name = (
    <div>
      <p>Dan</p>
      <p>Ledwos</p>
    </div>
  );
  return <div className='landingPage portfolio-section'>{name}</div>;
};

export default LandingPage;
