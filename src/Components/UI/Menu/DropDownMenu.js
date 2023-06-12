import React, { useState, useRef } from 'react';

const DropDownMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
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
    },
    {
      text: 'Prestations',
      subMenuItems: [
        { text: 'Créations vitaminées' },
        { text: 'Identité visuelle' },
        { text: 'Illustrations sur mesure' },
      ],
    },
    {
      text: 'Realisations',
      subMenuItems: [
        { text: 'Portfolio' },
      ],
    },
    {
      text: 'Ils en parlent',
      subMenuItems: [],
    },
    {
      text: 'Contact',
      subMenuItems: [],
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

  return (
    <div className="bg-blue-500">
      <ul className="list-none flex items-center justify-center relative"> {/* Ajoutez la classe "justify-center" */}
        {menuItems.map((menuItem, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <a href="#" className="text-white uppercase font-semibold text-sm block px-4 py-2">
              {menuItem.text}
            </a>
            {hoveredItem === index && menuItem.subMenuItems.length > 0 && (
              <ul className="absolute top-full bg-blue-500 flex flex-col px-0 mt-2 left-1/2 transform -translate-x-1/2 items-center">
                {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <a href="#" className="text-white uppercase font-semibold text-sm block px-4 py-2">
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