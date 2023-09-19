import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import './index.css';
import './App.css';

function AcademyLayout() {
    return (
        <div className="academy-container">
            <Routes>
                <Route path="/academy/signup" element={<Signup />} />
                <Route path="/academy/signin" element={<Signin />} />
            </Routes>
        </div>
    );
}

export default AcademyLayout;
