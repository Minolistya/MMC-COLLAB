import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../styles/styles.css';

const SignUpPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const history = useHistory();

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign-up logic here
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Contact Number:', contactNumber);
        console.log('Email:', email);
        console.log('Verification Code:', verificationCode);
        // Navigate to LoginPage upon successful sign-up
        history.push('/login');
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Verification Code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                />
                <input type="submit" value="Sign Up" />
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default SignUpPage;