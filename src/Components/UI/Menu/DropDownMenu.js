import React, { useState, useRef } from 'react';
import styles from './DropDownMenu.module.css';

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
    }, 1000000);
  };

  return (
    <div className={styles.container}>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href='#'>{menuItem.text}</a>
            {hoveredItem === index && menuItem.subMenuItems.length > 0 && (
              <ul className={styles['sub-menu']}>
                {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <a href='#'>{subMenuItem.text}</a>
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