import React from 'react';
import FirstCarousel from '../../FirstCarousel/FirstCarousel';
import Section1 from '../../Section1/Section1'
import Section2 from '../../Section2/Section2';
import Section3 from '../../Section3/Section3';
import SecondCarousel from '../../SecondCarousel/SecondCarousel';
import ButtonRectangle from '../../UI/ButtonRectangle/ButtonRectangle';
import Section4 from '../../Section4/Section4';
import ThirdCarousel from '../../ThirdCarousel/ThirdCarousel';
import Contact from '../../Contact/Contact';
import ScrollButton from '../../UI/ScrollButton/ScrollButton';

function HomePage() {
  return (
    <div>
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
    </div>
  );
}

export default HomePage;