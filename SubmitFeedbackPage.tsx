import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/styles.css';

const SubmitFeedbackPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle feedback submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Feedback:', feedback);
        history.push('/feedback-submitted');
    };

    return (
        <div className="container">
            <h1 style={{ color: 'yellow' }}>Submit Feedback</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitFeedbackPage;