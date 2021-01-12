import React from 'react';
import './Footer.css';

function Footer() {
  return (
      <footer>
      <div className="container">
        Copyright &copy;  {(new Date().getFullYear())} Let&apos;s Recycle All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
