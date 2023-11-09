import React from 'react';
import { useState } from 'react';

function Card({ heading }) {
    const [card, setCard] = useState([
        {
            img: './img/Rectangle 4.png',
            title: 'Парикмахерское кресло «Норм» гидравлическое',
            price: '9 900 ₽',
        },
        {
            img: './img/Rectangle 4.png',
            title: 'Парикмахерское кресло «Норм» гидравлическое',
            price: '9 900 ₽',
        },
        {
            img: './img/Rectangle 4.png',
            title: 'Парикмахерское кресло «Норм» гидравлическое',
            price: '9 900 ₽',
        },
        {
            img: './img/Rectangle 4.png',
            title: 'Парикмахерское кресло «Норм» гидравлическое',
            price: '9 900 ₽',
        },
    ])

    return (
        <div className='section2'>
            <div className="s2_top">
                <h1 class="title">{heading}</h1>
                <div className="s2_wrapper">
                    {
                        card.map((item, index) => (
                            <div className="s2_card" key={index}>
                                <figure><img src={item.img} alt={item.img} /></figure>
                                <h3>{item.title}</h3>
                                <h2>{item.price}</h2>
                                <button class="card_btn">Купить</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;