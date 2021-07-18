import React, { useState }  from 'react';

import './Category.scss';
import Card from '../Card/Card';




const Category = (props) => {

    const [number, setNumber] = useState([])

    const addCard = () => {
        setNumber((number, i) => [...number, <Card key={i}/>])
        // document.querySelector(".category__body").appendChild(document.createElement("<Card />"))
        document.querySelector('#site-modal').style.display = "flex";
        console.log(number)

    }

    // const cardList = (number) => {
    //     console.log(number)
    //     for (let i=0; i < number; i++) {
    //         return (
    //             <Card />
    //         )
    //     }
    // }

    return (
        <div className="category">
            <h2 className="category__title">{props.heading}<span className="category__title-sub"> - {props.subheading}</span></h2>
            <section className="category__body card__wrapper">
                {number}
                <button className="card category__button" onClick={addCard}>
                    <div className="category__add-card">
                    <h3>Add Card +</h3>
                    </div>
                </button>
            </section>

           
           
        </div>
    )
}

export default Category;