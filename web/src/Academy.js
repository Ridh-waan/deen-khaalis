import React from 'react';
import { Link } from 'react-router-dom';

const Academy = () => {
    return (
        <div className='academy-container'>
            <h2> Welcome to Deeen Khaalis Academy</h2>
            <p>
                To access the academy, please{' '}
                <Link to="/academy/signup">sign up</Link> or <Link to="/academy/signin">sign in</Link>.
            </p>
        </div>
    );
};

export default Academy;
