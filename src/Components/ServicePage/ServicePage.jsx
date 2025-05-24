// ServicePage.jsx
import React from 'react';
import './ServicePage.css';
import { motion } from 'framer-motion';

const services = [
  "Smart solutions to web applications",
  "Migrating websites",
  "New business solutions",
  "Intelligence / Cybersecurity solutions",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ServicePage = () => {
  return (
    <motion.div
      className="services-container"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -30 }}
      variants={containerVariants}
    >
      <h1 className="services-heading">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={cardVariants}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {service}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicePage;

