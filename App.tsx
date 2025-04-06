import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ReturnItemsPage from './components/ReturnItemsPage';
import SignUpPage from './components/SignUpPage';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import SelectShoppingAppPage from './components/SelectShoppingAppPage';
import ReturnItemDetailsPage from './components/ReturnItemsPage';
import SubmitFeedbackPage from './components/SubmitFeedbackPage';
import FeedbackSubmittedPage from './components/FeedbackSubmittedPage';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/select-shopping-app" component={SelectShoppingAppPage} />
                <Route path="/return-items" component={ReturnItemsPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/return-item-details" component={ReturnItemDetailsPage} />
                <Route path="/submit-feedback" component={SubmitFeedbackPage} />
                <Route path="/feedback-submitted" component={FeedbackSubmittedPage} />
            </Switch>
        </Router>
    );
};

export default App;