import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Cards from './Components/Cards/Cards';
import About from './Components/About/about';
import ServicePage from './Components/ServicePage/ServicePage';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/login';
import SkillArc from './Components/SkillArc/SkillArc';
import Admin from './Components/Admin/Admin';

// Home composed component
const Home = () => (
  <>
    <Hero />
    <Cards />
  </>
);

// Routes wrapped in AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/About" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/ServicePage" element={<PageWrapper><ServicePage /></PageWrapper>} />
        <Route path="/Contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/Login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/skill%20arc" element={<SkillArc />} />
        <Route path="/skill arc" element={<Navigate to="/skillarc" replace />} />
        <Route path="/skillarc" element={<SkillArc />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </AnimatePresence>
  );
};

// Reusable motion wrapper for transitions
import { motion } from 'framer-motion';
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
