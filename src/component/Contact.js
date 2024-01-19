import React from 'react';

const Contact = () => {
  return (
    <div id='contact' ref={(el) => (window.contactRef = el)} style={{ textAlign: 'center', padding: '20px', background: '#333', color: 'white' }}>
      <h2>Contact Us</h2>
      <p>Email: aaslan1710@gmail.com</p>
      <p>Address: 34340, Beyoglu , Istanbul , Türkiye</p>
    </div>
  );
};

export default Contact;
