import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './App.css';

const Academy = () => {
    return (
        <div className='academy-container'>
            <h2> Welcome to Deen Khaalis Academy</h2>
            <div className='programs'>
                <div className='beginners'>
                    <h2>LUGHA YA KIARABU</h2>
                    <h2>Kwa wanaoanza</h2><br />
                    <b><p>[ARABIC COURSE]</p></b>
                    <b> For beginners</b>
                </div>
                <div className='intermediate'>
                    <h2>BARNAMIJ YA MUTAWASSIT</h2><br />
                    <p><b>[INTERMEDIATE COURSE]</b></p>
                </div>
                <div className='secondary'>
                    <h2>BARNAMIJ YA THANAWI</h2><br />
                    <p><b>[SECONDARY COURSE]</b></p>
                </div>
                <div className='new-muslims'>
                    <h2>BARNAMIJ YA WAISILAMU WAGENI</h2><br />
                    <p><b>[NEW MUSLIMS COURSE]</b></p>
                    <b>(COMMING SOON)</b>
                </div>
                {/* Add your image below the program divs */}
                <img
                    src='/images/book_academy.jpeg' // Replace with the actual image path
                    alt='Your Image'
                    className='bottom-image'
                    height='100'
                    width='300'

                />
                <div className='popping-circle'>
                <b>Karibu</b> <br/>
                    </div>
            </div>
        </div>
    );
};

export default Academy;
