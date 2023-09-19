import React from 'react';
import { Link } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
 // Import your custom CSS for styling
import './index.css';
import './App.css';

const Authentication = () => {
    return (
        <div className="academy-container">
            <h2>Authentication</h2>
            <p>Choose an option:</p>
            <div className="center-content">
                <Signin />
                <Signup />
            </div>
            <p>
                Already have an account? <Link to="/academy/signin">Sign in</Link>
            </p>
        </div>
    );
};

export default Authentication;
