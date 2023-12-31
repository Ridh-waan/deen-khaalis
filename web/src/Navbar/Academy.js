import React from 'react';
import { Link } from 'react-router-dom';


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
            
            </div>
        </div>
    );
};

export default Academy;
