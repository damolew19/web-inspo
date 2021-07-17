import React from 'react';


import './Card.scss';
import image from './dtn.png'

const Card = () => {
    return(
        <a className="card" href="">
            <div className="card__content">
                <figure className="card__figure">
                    <img className="card__img" src={image} alt="" />
                </figure>
                <section className="card__body">
                    <h3 className="card__title">Google</h3>
                    <p className="card__date">
                        19 June, 2021
                    </p>
                </section>
            </div>
           
        </a>
    )
}

export default Card;