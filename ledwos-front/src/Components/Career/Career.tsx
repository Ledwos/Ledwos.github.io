import React, { useState } from 'react';
import { CareerSection } from '.';
import SectionHeader from '../Common/SectionHeader';
import CareerMap from './CareerMap';
import CareerPopup from './CareerPopup';

const Career: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);
  const [popupSection, setPopupSection] = useState<CareerSection>(null);

  const displayPopup = (name: CareerSection = null) => {
    setPopupSection(name);
    setShow(!show);
  };

  return (
    <div className='portfolio-section portfolio-career position-relative'>
      <CareerPopup
        handleClose={displayPopup}
        show={show}
        section={popupSection}
      />
      <SectionHeader>Career</SectionHeader>
      <div className='position-absolute mt-5 ms-5 careerInfoText'>
        Click on each point to learn more!
      </div>
      <CareerMap displayPopup={displayPopup} />
    </div>
  );
};

export default Career;
