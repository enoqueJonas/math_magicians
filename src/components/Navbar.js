import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  const navBarStyling = {
    display: 'flex',
    flexDirection: 'row',
    width: '85em',
    height: '6em',
    justifyContent: 'space-between',
    margin: '0 30px',
  };

  const navMenuStyling = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    width: '12em',
    height: '4em',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
        <nav className="navBar" style={navBarStyling}>
            <h1>Math Magicians</h1>
            <ul style={navMenuStyling}>
                {links.map((link) => (
                    <li key={link.id}>
                        <NavLink to={link.path} exact="true">
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
  );
};

export default Navbar;