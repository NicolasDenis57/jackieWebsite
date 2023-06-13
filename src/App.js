import React from 'react';
import Header from './Components/Header/Header';
import FirstCarousel from './Components/FirstCarousel/FirstCarousel';
import SecondCarousel from './Components/SecondCarousel/SecondCarousel';
import ThirdCarousel from './Components/ThirdCarousel/ThirdCarousel';
import ScrollButton from './Components/UI/ScrollButton/ScrollButton';
import ButtonRectangle from './Components/UI/ButtonRectangle/ButtonRectangle';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4/Section4';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <FirstCarousel />
      <ScrollButton direction="down" />
      <Section1 />
      <Section2 />
      <Section3 />
      <SecondCarousel />
      <ButtonRectangle />
      <Section4 />
      <ThirdCarousel />
      <Contact />
      <ScrollButton direction="up" />
      <Footer />
    </div>
  );
}

export default App;