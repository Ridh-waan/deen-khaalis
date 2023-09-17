import React from 'react';
import './App.css';

const Muslim = () => {
    return (
        <div className="muslim-container">
            <h1>Muslim</h1>
            <h2>Book Description</h2>
            <p>Here you can provide a description or content for the Muslim book.</p>

            <h2>Audio Files</h2>
            <ul>
                <li>
                    <a href="/path/to/muslim-audio1.mp3" download>Audio File 1</a>
                </li>
                <li>
                    <a href="/path/to/muslim-audio2.mp3" download>Audio File 2</a>
                </li>
                {/* Add more audio files as needed */}
            </ul>

            <h2>PDF Files</h2>
            <ul>
                <li>
                    <a href="/path/to/muslim-pdf1.pdf" target="_blank" rel="noopener noreferrer">PDF File 1</a>
                </li>
                <li>
                    <a href="/path/to/muslim-pdf2.pdf" target="_blank" rel="noopener noreferrer">PDF File 2</a>
                </li>
                {/* Add more PDF files as needed */}
            </ul>
        </div>
    );
}

export default Muslim;
