import React from 'react';
import './Navigation.css';
import GitLogo from '../../../images/git.png';
import LiLogo from '../../../images/linkedin.png';

interface NavigationProps {
  scrollToSection: (section: string) => void;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
  scrollToSection,
}: NavigationProps) => {
  return (
    <>
      <div className='OrangeNav'>
        <div className='NavBarO'>
          <p
            className='NavItem'
            onClick={() => scrollToSection('portfolio-about')}
          >
            About
          </p>
          <p
            className='NavItem'
            onClick={() => scrollToSection('portfolio-career')}
          >
            Career
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
