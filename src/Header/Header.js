import React from 'react';

import './Header.scss'

const Header = (props) => {

  

    return (
        <nav className="header">
            <p className="header__title">Web Inspo</p>
            <button className="header__button header__add" type="button" onKeyPress={props.addCategory} onClick={props.addCategory}>+</button>
        </nav>

    )
}

export default Header