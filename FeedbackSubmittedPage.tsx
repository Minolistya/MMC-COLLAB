import React from 'react';

const FeedbackSubmittedPage: React.FC = () => {
    return (
        <div className="container">
            <h1 style={{ color: 'black' }}>Feedback Submitted</h1>
            <p>Thank you for your feedback!</p>
            <p>A confirmation email has been sent to your email account. Please click the link in the email to be redirected to your shopping link.</p>
        </div>
    );
};

export default FeedbackSubmittedPage;