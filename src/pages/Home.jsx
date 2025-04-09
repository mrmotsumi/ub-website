import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutTB from '../components/AboutTB';
import TypesOfTB from '../components/TypesOfTB';
import Symptoms from '../components/Symtoms';
import Treatment from '../components/Treatment';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutTB />
      <TypesOfTB />
      <Symptoms />
      <Treatment />
    </div>
  );
};

export default Home;