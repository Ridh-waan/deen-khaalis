import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication and related functions
import { auth } from './firebaseConfig'; // Import your Firebase configuration
import './index.css';
import './App.css';
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth(); // Initialize Firebase authentication
            await signInWithEmailAndPassword(auth, email, password);
            // User signed in successfully
            // Redirect to a dashboard or profile page
        } catch (error) {
            // Handle sign-in error (e.g., show an error message)
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account? <Link to="/academy/signup">Sign up</Link>
            </p>
        </div>
    );
};

export default Signin;
