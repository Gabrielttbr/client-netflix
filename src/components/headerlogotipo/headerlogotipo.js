import React from 'react';
import { Link } from 'react-router-dom';

import netlfix from '../../assets/netflix.png';

function Headerlogotipo({navigate}){
    return (
        <header className="header">
            <Link className="navbar-brand marginlogotipo" to="/login">
                <img src={netlfix} className="logotipo" alt="Logo netflix"height="35px"></img>
            </Link>
        </header>
        
    );
}
export default Headerlogotipo;