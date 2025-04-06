import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-container">
            <div className="welcome-section">
                <h1>Welcome to All Goods Refund</h1>
                <p>Your one-stop solution for returning goods and getting refunds.</p>
            </div>
            <div className="button-container">
                <Link to="/login" className="button">Login</Link>
                <Link to="/login" className="button">Return Items</Link>
                <Link to="/signup" className="button">Sign Up</Link>
            </div>
        </div>
    );
};

export default HomePage;