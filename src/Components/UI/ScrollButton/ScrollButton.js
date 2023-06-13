import React, { useRef } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

function ScrollButton({ direction }) {
  const sectionRef = useRef(null);

  const handleClick = () => {
    let scrollTarget = 0; // Par défaut, monter vers le Header

    if (direction === 'down') {
      // Descendre vers le composant Contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactSectionPosition = contactSection.offsetTop;
        scrollTarget = contactSectionPosition;
      }
    }

    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  const buttonClasses = `flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white transition-colors duration-300 ${
    direction === 'down' ? 'rotate-180' : ''
  }`;

  const sectionClasses = 'flex items-center justify-center';

  return (
    <section ref={sectionRef} className={sectionClasses} style={{ height: sectionRef.current?.offsetHeight }}>
      <button className={buttonClasses} onClick={handleClick}>
        {direction === 'down' ? <FiChevronUp size={24} /> : <FiChevronDown size={24} className="transform rotate-180" />}
      </button>
    </section>
  );
}

export default ScrollButton;