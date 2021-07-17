import React from 'react';
import { hot } from 'react-hot-loader/root';

import './Header.scss'

const Header = (props) => {

  

    return (
        <nav className="header">
            <p className="header__title">Web Inspo</p>
            <p className="header__add" onClick={props.addCategory}>+</p>
        </nav>

    )
}

export default Header