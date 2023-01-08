import React from 'react';
import SectionHeader from '../Common/SectionHeader';
import ProfileImg from '../../images/profileImg.PNG';

const About = () => {
  return (
    <div className='portfolio-section portfolio-about'>
      <SectionHeader>About</SectionHeader>
      <div className='portfolio-about-body'>
        <div className='row mt-3 px-4'>
          <div className='col-6 about-text'>
            <p className='mb-2'>Web developer based in London.</p>
            <p className='mb-2'>
              Became a developer as it allows me to:
              <ul className='mb-0'>
                <li>Problem solve</li>
                <li>Be creative</li>
              </ul>
            </p>
            <p>
              Both of which keep my brain engaged, and in turn make my job
              entertaining.
            </p>
          </div>
          <div className='col-6'>
            <img
              className='ProfileImg'
              src={ProfileImg}
              alt='ProfilePhoto'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
