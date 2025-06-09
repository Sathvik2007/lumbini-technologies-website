// ./Components/Contact/Contact.jsx
import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      when: "beforeChildren",
      staggerChildren: 0.2
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="contact-heading" variants={childVariants}>
        Contact Us
      </motion.h1>

      <motion.form className="contact-form" variants={childVariants}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </motion.form>

      <motion.div className="contact-info" variants={childVariants}>
        <p>Email: lumbinitechnologies@rediffmail.com</p>
        <p>Phone: +91 9848294006</p>
        <p>
          Address: Flat No. 9, 3rd Floor, A Block, Sarvani Towers, <br />
          Siddhartha Nagar, Vijayawada - 520010
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
