import React, { useState } from 'react';
import './Products.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Import your local image with the exact filename 'lms.jpg'
import lmsImage from '../../assets/lms.jpg'; 

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); 
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Learning Management System",
      description: "An all-in-one Learning Management System designed to streamline online education with course creation, progress tracking, and interactive content delivery.",
      features: ["Interactive Quizzes & Assignments", "Admin & Instructor Dashboards", "Student Progress Tracking", "Mobile-Friendly Access"],
      // Use the imported image variable here
      image: lmsImage, 
      detailedInfo: {
        overview: "Our comprehensive Learning Management System revolutionizes the way educational institutions and corporate training programs deliver content. Built with modern web technologies, it provides a seamless experience for both instructors and learners.",
        keyBenefits: [
          "Reduce administrative workload by 60%",
          "Increase student engagement through interactive content",
          "Track learning progress with detailed analytics",
          "Support for multiple learning formats (video, text, interactive)",
          "Automated grading and feedback systems"
        ],
        technicalSpecs: [
          "Cloud-based infrastructure with 99.9% uptime",
          "Mobile-responsive design",
          "Integration with popular tools (Zoom, Google Workspace)",
          "SCORM compliant",
          "Multi-language support"
        ],
        pricing: {
          starter: "Coming Soon - Contact us for details",
          professional: "Coming Soon - Contact us for details",
          enterprise: "Coming Soon - Contact us for details"
        }
      }
    },
    // You can add more products here
  ];

  const openModal = (product) => {
    // Debugging line: Check if the function is called and with what product
    console.log("Attempting to open modal for:", product.title);
    setSelectedProduct(product);
    setActiveTab('overview'); // Reset tab to overview when opening new modal
  };

  const closeModal = () => {
    // Debugging line: Check if the close function is called
    console.log("Attempting to close modal.");
    setSelectedProduct(null);
  };

  // Handler for "Contact Us Today" button
  const handleContactUsClick = () => {
    console.log("Redirecting to contact page...");
    navigate('/contact'); // Redirects to the /contact route
  };

  // Handler for "Schedule Demo" button
  const handleScheduleDemoClick = () => {
    console.log("Redirecting to demo scheduling...");
    // You can navigate to a demo page or open a scheduling modal
    navigate('/demo'); // Or whatever route you prefer
  };

  // Handler for "Get Started" button
  const handleGetStartedClick = (productId) => {
    console.log("Get started clicked for product:", productId);
    // Navigate to signup/onboarding or specific product page
    navigate(`/get-started/${productId}`);
  };

  return (
    <motion.div
      className="products-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1>Our Products</h1>
          <p>Innovative solutions tailored to transform your business and drive growth</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="product-image">
              <img src={product.image} alt={product.title} />
              <div className="product-overlay">
                <button 
                  className="view-details-btn"
                  onClick={() => openModal(product)}
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="product-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="product-features">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
              <div className="product-actions">
                <button 
                  className="btn-primary"
                  onClick={() => handleGetStartedClick(product.id)}
                >
                  Get Started
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => openModal(product)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{selectedProduct.title}</h2>
                <button className="close-btn" onClick={closeModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-image">
                  <img src={selectedProduct.image} alt={selectedProduct.title} />
                </div>

                {/* Tab Navigation for Modal Content */}
                <div className="modal-tabs">
                  <button
                    className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'benefits' ? 'active' : ''}`}
                    onClick={() => setActiveTab('benefits')}
                  >
                    Benefits
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'techSpecs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('techSpecs')}
                  >
                    Tech Specs
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'pricing' ? 'active' : ''}`}
                    onClick={() => setActiveTab('pricing')}
                  >
                    Pricing
                  </button>
                </div>

                {/* Tab Content (conditionally rendered) */}
                <div className="tab-content-container">
                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="modal-section"
                      >
                        <h3>Overview</h3>
                        <p>{selectedProduct.detailedInfo.overview}</p>
                      </motion.div>
                    )}

                    {activeTab === 'benefits' && (
                      <motion.div
                        key="benefits"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="modal-section"
                      >
                        <h3>Key Benefits</h3>
                        <ul>
                          {selectedProduct.detailedInfo.keyBenefits.map((benefit, idx) => (
                            <li key={idx}>
                              <span className="icon-check">✓</span> {benefit}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === 'techSpecs' && (
                      <motion.div
                        key="techSpecs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="modal-section"
                      >
                        <h3>Technical Specifications</h3>
                        <ul>
                          {selectedProduct.detailedInfo.technicalSpecs.map((spec, idx) => (
                            <li key={idx}>
                              <span className="icon-settings">⚙</span> {spec}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === 'pricing' && (
                      <motion.div
                        key="pricing"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="modal-section"
                      >
                        <h3>Pricing Plans</h3>
                        <div className="pricing-grid">
                          <div className="pricing-card">
                            <h4>Starter</h4>
                            <p>{selectedProduct.detailedInfo.pricing.starter}</p>
                          </div>
                          <div className="pricing-card">
                            <h4>Professional</h4>
                            <p>{selectedProduct.detailedInfo.pricing.professional}</p>
                          </div>
                          <div className="pricing-card">
                            <h4>Enterprise</h4>
                            <p>{selectedProduct.detailedInfo.pricing.enterprise}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="modal-footer">
                <button 
                  className="btn-primary"
                  onClick={() => handleGetStartedClick(selectedProduct.id)}
                >
                  Get Started
                </button>
                <button 
                  className="btn-outline"
                  onClick={handleScheduleDemoClick}
                >
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how our solutions can help you achieve your goals</p>
          <div className="cta-buttons">
            <button
              className="btn-primary large"
              onClick={handleContactUsClick}
            >
              Contact Us Today
            </button>
            <button 
              className="btn-outline large"
              onClick={handleScheduleDemoClick}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;