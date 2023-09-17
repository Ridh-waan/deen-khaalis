import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from './firebaseConfig'; // Import your Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // User signed up successfully
            const user = userCredential.user;
            // Redirect to a dashboard or profile page
        } catch (error) {
            // Handle signup error (e.g., show an error message)
        }
    };

    return (
        <div className='academy-container'>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign up</button>
            </form>
            <p>
                Already have an account? <Link to="/academy/signin">Sign in</Link>
            </p>
        </div>
    );
};

export default Signup;
