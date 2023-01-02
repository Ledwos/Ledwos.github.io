import React from 'react';
import './Navigation.css';
import GitLogo from '../../../images/git.png';
import LiLogo from '../../../images/linkedin.png';

interface NavigationProps {
  aScroll: () => void;
  pScroll: () => void;
  cScroll: () => void;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
  aScroll,
  pScroll,
  cScroll,
}: NavigationProps) => {
  return (
    <>
      <div className='OrangeNav'>
        <div className='NavBarO'>
          <p className='NavItem' onClick={aScroll}>
            About
          </p>
          <p className='NavItem' onClick={pScroll}>
            Projects
          </p>
          <p className='NavItem' onClick={cScroll}>
            Contact
          </p>
        </div>
      </div>
      <div className='PinkNav'>
        <div className='NavBarP'>
          <a
            className='LogoLink'
            href='https://www.linkedin.com/in/daniel-ledwos-1a9780101/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='LogoItem' src={LiLogo} alt='socialLogo'></img>
          </a>
          <a
            className='LogoLink'
            href='https://github.com/ledwos'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='LogoItem' src={GitLogo} alt='socialLogo'></img>
          </a>
        </div>
      </div>
      <div className='BlueNav'></div>
    </>
  );
};

export default Navigation;
