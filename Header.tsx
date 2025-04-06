import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import logo from '../assets/logo2.png'; // Import the new image file

const Header: React.FC = () => {
    return (
        <header style={{ backgroundColor: 'neonblue', color: '#fff', padding: '10px' }}>
            <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
            <h1 style={{ color: 'yellow' }}>All Goods Refund</h1>
            <nav>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About Us</Link>
                <Link to="/login" className="link">Login</Link>
                <Link to="/signup" className="link">Sign Up</Link>
            </nav>
        </header>
    );
};

export default Header;