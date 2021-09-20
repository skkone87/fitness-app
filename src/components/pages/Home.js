import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
// import Mailer from '../Mailer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
      {/* <Mailer /> */}
    </>
  );
}

export default Home;
