import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';
import Footer from '../components/Footer';

export function Home () {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SecondPage />
      <ThirdPage />
      <Footer />
    </div>
  );
}
