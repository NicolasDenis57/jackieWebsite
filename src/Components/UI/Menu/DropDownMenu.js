import React, { useState, useRef } from 'react';

const DropDownMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = [
    {
      text: 'Accueil',
      anchor: '/',
      subMenuItems: [],
      
    },
    {
      text: 'A propos',
      anchor:'#Section1',
      subMenuItems: [
        { text: 'La petite histoire',
          anchor:'#'
        },
      ],
    },
    {
      text: 'Prestations',
      anchor:'#Section2',
      subMenuItems: [
        { text: 'Créations vitaminées', anchor:'#' },
        { text: 'Identité visuelle', anchor:'#' },
        { text: 'Illustrations sur mesure', anchor:'#' },
      ],
    },
    {
      text: 'Realisations',
      anchor:'#SeconCarousel',
      subMenuItems: [
        { text: 'Portfolio',
          anchor:'#' 
        },
      ],
    },
    {
      text: 'Ils en parlent',
      anchor: '#ThirdCarousel',
      subMenuItems: [],
    },
    {
      text: 'Contact',
      anchor: '#Contact',
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

  const handleSubItemMouseEnter = (index) => {
    setHoveredSubItem(index);
  };

  const handleSubItemMouseLeave = () => {
    setHoveredSubItem(null);
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
            <a href={menuItem.anchor} className="text-white uppercase font-semibold text-sm block px-4 py-2">
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
                      href={subMenuItem.anchor}
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