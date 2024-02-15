import React from 'react';
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons'; // Importa los íconos que necesitas

const Footer = () => {
  return (
    <footer className='Footer-Content bg-dark text-white p-3 d-flex justify-content-between align-items-center'>
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <Facebook size={32} /> {/* Ícono de Facebook */}
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <Instagram size={32} /> {/* Ícono de Instagram */}
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <Twitter size={32} /> {/* Ícono de Twitter */}
        </a>
      </div>
    </footer>
  )
}

export default Footer;
