import React from 'react';
import '../styles/styles.css';

const AboutPage: React.FC = () => {
    return (
        <div className="container">
            <h1 style={{ color: 'yellow', textAlign: 'center' }}>About Us</h1>
            <div className="about-content">
                <img 
                    src="" 
                    alt="About Us" 
                    className="about-image" 
                />
                <div className="about-text">
                    <p>Welcome to <strong>All Goods Refund</strong>. We are dedicated to providing the best refund services for all your goods. Our mission is to ensure customer satisfaction and make the refund process as smooth as possible.</p>
                    <p>Our team of experts is here to assist you with any issues you may have with your purchases. We work tirelessly to ensure that you receive the best service and support.</p>
                    <p>At <strong>All Goods Refund</strong>, we believe in transparency, efficiency, and customer satisfaction. We are committed to making the refund process hassle-free and straightforward.</p>
                    <p>Thank you for choosing <strong>All Goods Refund</strong>. We look forward to serving you!</p>
                </div>
            </div>
            <footer style={{ marginTop: '20px', textAlign: 'center', padding: '10px', backgroundColor: 'pink', color: '#fff' }}>
                <p>Follow us on:</p>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>Facebook</a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>Telegram</a>
                <p style={{ marginTop: '10px' }}>For support, contact us at <a href="mailto:support@allgoodsrefund.com" style={{ color: '#fff' }}>support@allgoodsrefund.com</a></p>
            </footer>
        </div>
    );
};

export default AboutPage;