// your Admin.jsx component (clean and simple version)
import React from 'react';

const Admin = () => {
  return (
    <iframe
      title="Admin"
      src="/Admin/index.html"
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: 'white'
      }}
    />
  );
};

export default Admin;