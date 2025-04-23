import React from 'react';
import Banner from '../components/Banner';
import About from '../components/layout-components/About';
import HowItWorks from '../components/layout-components/HowItWorks';

const HomePage = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Banner></Banner>
      <About></About>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default HomePage;