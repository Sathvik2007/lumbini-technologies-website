import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <Link to="/" className="logo">Lumbini Technologies</Link>
      <nav className="navbar">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>About Us</Link>
        <Link to="/ServicePage" className={location.pathname === '/ServicePage' ? 'active' : ''}>Services</Link>
        <Link to="/Contact" className={location.pathname === '/Contact' ? 'active' : ''}>Contact</Link>
        <Link to="/Login" className={location.pathname === '/Login' ? 'active' : ''}>Login</Link>  {/* Added Login Link */}
      </nav>
    </header>
  );
};

export default Navbar;
