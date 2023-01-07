import React, { PropsWithChildren } from 'react';
import '../../App.css';

const SectionHeader: React.FunctionComponent<PropsWithChildren> = (props) => {
  return <h1 className='portfolio-header ms-4 mt-4'>{props.children}</h1>;
};

export default SectionHeader;
