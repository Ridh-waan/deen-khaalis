import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './App.css';

const Academy = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <h2>LUGHA YA KIARABU</h2>
                <h2>Kwa wanaoanza </h2><br />
                <b><p>[ARABIC COURSE]</p></b>
                <p> For beginners</p>
            </div>
            <div className='program'>
                <h2>BARNAMIJ YA MUTAWASSIT</h2><br/>
                <p><b>[INTERMEDIATE COURSE]</b></p>
            </div>
            <div className='program'>
                <h2>BARNAMIJ YA THANAWI</h2><br />
                <p><b>[SECONDARY COURSE]</b></p>
            </div>
            <div className='program'>
                <h2>BARNAMIJ YA WAISILAMU WAGENI</h2><br />
                <p><b>[NEW MUSLIMS COURSE]</b></p>
                <b>(COMMING SOON)</b>
            </div>
        </div>
    );
};

export default Academy;
