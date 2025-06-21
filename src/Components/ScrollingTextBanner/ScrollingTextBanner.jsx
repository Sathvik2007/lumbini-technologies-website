import React from 'react';
import { motion } from 'framer-motion';
import './ScrollingTextBanner.css';

const ScrollingTextBanner = () => {
  const bannerText = "🚀 Innovative Technology Solutions • 💡 Cutting-Edge Development • 🌟 24/7 Premium Support • 🔥 Latest Updates & Features • 📈 Growing Community of 10,000+ Clients • ";

  return (
    <div className="scrolling-text-banner">
      <motion.div
        className="banner-text"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {bannerText.repeat(8)}
      </motion.div>
    </div>
  );
};

export default ScrollingTextBanner;