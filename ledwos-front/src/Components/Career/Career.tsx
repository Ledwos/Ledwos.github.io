import React from 'react';
import SectionHeader from '../Common/SectionHeader';
import CareerMap from './CareerMap';

const Career: React.FunctionComponent = () => {
  return (
    <div className='portfolio-section portfolio-career'>
      <SectionHeader>Career</SectionHeader>
      <CareerMap />
    </div>
  );
};

export default Career;
