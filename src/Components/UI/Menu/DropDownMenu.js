import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const DropDownMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      text: 'Accueil',
      target: 'header', // Pointe vers la zone "header" de la page d'accueil
      subMenuItems: [],
    },
    {
      text: 'A propos',
      target: 'section1', // Pointe vers la zone "section1" de la page d'accueil
      subMenuItems: [
        {
          text: 'La petite histoire',
          href: '/la-petite-histoire',
        },
      ],
    },
    {
      text: 'Prestations',
      target: 'section2', // Pointe vers la zone "section2" de la page d'accueil
      subMenuItems: [
        {
          text: 'Nature',
          href: '/nature',
        },
        {
          text: 'Illustrations pédagogiques',
          href: '/illustrations-pedagogiques',
        },
        {
          text: 'Jeunesse',
          href: '/jeunesse',
        },
      ],
    },
    {
      text: 'Realisations',
      target: 'secondCarousel', // Pointe vers la zone "secondCarousel" de la page d'accueil
      subMenuItems: [
        {
          text: 'Portfolio',
          href: '/book',
        },
      ],
    },
    {
      text: 'Ils en parlent',
      target: 'thirdCarousel', // Pointe vers la zone "thirdCarousel" de la page d'accueil
      subMenuItems: [],
    },
    {
      text: 'Contact',
      target: 'contact', // Pointe vers la zone "contact" de la page d'accueil
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

  const handleButtonClick = (target) => {
    let scrollTarget = 0; // Par défaut, monter vers le Header

    if (target) {
      const targetElement = document.getElementById(target);
      if (targetElement) {
        const targetElementPosition = targetElement.offsetTop;
        scrollTarget = targetElementPosition;
      }
    }

    if (location.pathname === '/') {
      navigate(`/#${target}`);
    } else {
      navigate(`/${target}`);
    }
  };

  useEffect(() => {
    let scrollTarget = 0; // Par défaut, monter vers le Header

    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1));
      if (targetElement) {
        const targetElementPosition = targetElement.offsetTop;
        scrollTarget = targetElementPosition;
      }
    }

    setTimeout(() => {
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }, 0);
  }, [location.hash]);

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
            <Link
              to={`/#${menuItem.target}`}
              className="text-white uppercase font-semibold text-sm block px-4 py-2"
              onClick={() => handleButtonClick(menuItem.target)}
            >
              {menuItem.text}
            </Link>
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
                      href={subMenuItem.href}
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