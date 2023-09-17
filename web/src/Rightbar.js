import React from 'react';
import './App.css'; // Import or create a CSS file for styling
import { Link } from 'react-router-dom';

function Rightbar() {
    const Books = [
        {
            id: 1,
            name: "Mwezi wa Muharam na Siku ya Ashuraah",
            downloadLink: "/Books/Nurein/Mwezi-wa-Muharam-na-siku-ya-Ashura.pdf" // Add the actual download link
        },
        {
            id: 2,
            name: "Radd Kwa Aweso",
            downloadLink: "/Books/Nurein/Radd-kwa-Aweso-1.pdf"
        },
        
        {
            id: 3,
            name: "Hajj na Ummra",
            downloadLink: "/Books/Nurein/hajj_na_umra.pdf"
        },
       
        
        // Add other books
    ];

    return (
        <aside className="rightbar">
            <ul className="book-list">
                <li>
                    <h3>Books</h3>
                </li>
                {Books.map((book) => (
                    <li key={book.id} className="book-item">
                        <span className="book-number">{book.id}</span>
                        <a href={book.downloadLink} download>
                            {book.name}
                        </a>
                    </li>

                ))}
            </ul>
        </aside>
    );
}

export default Rightbar;
