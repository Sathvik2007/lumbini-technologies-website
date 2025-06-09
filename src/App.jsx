import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Cards from './Components/Cards/Cards';
import About from './Components/About/about';
import ServicePage from './Components/ServicePage/ServicePage';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/login'; 
import SkillArc from './Components/SkillArc/SkillArc';
import Admin from './Components/Admin/Admin';

// Home component
const Home = () => (
  <>
    <Hero />
    <Cards />
  </>
);

// Animated page wrapper
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

// Animated Routes for animation + Navbar (excludes /skillarc and /admin)
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
      </Routes>
    </AnimatePresence>
  );
};

// Conditional rendering for Navbar, animations, and standalone Flutter/Admin pages
const AppContent = () => {
  const { pathname } = useLocation();
  const isFlutterRoute = pathname.toLowerCase().includes('/skillarc');
  const isAdminRoute = pathname.toLowerCase().includes('/admin');

  if (isFlutterRoute) {
    return (
      <Routes>
        <Route path="/skillarc" element={<SkillArc />} />
        <Route path="/skill arc" element={<Navigate to="/skillarc" replace />} />
        <Route path="/skill%20arc" element={<SkillArc />} />
      </Routes>
    )
  }

  if (isAdminRoute) {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    )
  }

  return (
    <>
      <Navbar />
      <AnimatedRoutes />
    </>
  )
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;