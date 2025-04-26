import React from 'react';
import Banner from '../components/Banner';
import About from '../components/layout-components/About';
import HowItWorks from '../components/layout-components/HowItWorks';
import SuccessStories from '../components/layout-components/SuccessStories';

const HomePage = () => {
  return (
    <div className='w-11/12 mx-auto font-Poppins'>
      <Banner></Banner>
      <About></About>
      <HowItWorks></HowItWorks>
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default HomePage;