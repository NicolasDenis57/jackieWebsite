import React, { useState, useRef } from 'react';

const DropDownMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = [
    {
      text: 'Accueil',
      subMenuItems: [],
    },
    {
      text: 'A propos',
      subMenuItems: [
        { text: 'La petite histoire' },
      ],
      target: 'section1',
    },
    {
      text: 'Prestations',
      subMenuItems: [
        { text: 'Créations vitaminées' },
        { text: 'Identité visuelle' },
        { text: 'Illustrations sur mesure' },
      ],
      target: 'section2',
    },
    {
      text: 'Realisations',
      subMenuItems: [
        { text: 'Portfolio' },
      ],
      target: 'secondCarousel',
    },
    {
      text: 'Ils en parlent',
      subMenuItems: [],
      target: 'thirdCarousel',
    },
    {
      text: 'Contact',
      subMenuItems: [],
      target: 'contact',
    },
  ];

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 1000);
  };

  const handleSubItemMouseEnter = (index) => {
    setHoveredSubItem(index);
  };

  const handleSubItemMouseLeave = () => {
    setHoveredSubItem(null);
  };

  const handleButtonClick = (target) => {
    let scrollTarget = 0; // Par défaut, monter vers le Header

    if (target) {
      const targetElement = document.getElementById(target);
      if (targetElement) {
        const targetElementPosition = targetElement.offsetTop;
        scrollTarget = targetElementPosition;
      }
    }

    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };


  return (
    <div className="bg-blue-500 relative z-10">
      <ul className="list-none flex items-center justify-center relative">
        {menuItems.map((menuItem, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="#" className="text-white uppercase font-semibold text-sm block px-4 py-2"
            onClick={() => handleButtonClick(menuItem.target)}>
              {menuItem.text}
            </a>
            {hoveredItem === index && menuItem.subMenuItems.length > 0 && (
              <ul className="absolute bg-blue-500 flex flex-col px-4 py-2 mt-2 left-0 items-center z-20">
                {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                  <li
                    key={subIndex}
                    onMouseEnter={() => handleSubItemMouseEnter(subIndex)}
                    onMouseLeave={handleSubItemMouseLeave}
                    className="w-max"
                  >
                    <a
                      href="#"
                      className={`text-white uppercase font-semibold text-sm block px-2 py-1 transition-colors ${
                        hoveredSubItem === subIndex ? 'bg-blue-400' : ''
                      }`}
                    >
                      {subMenuItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;