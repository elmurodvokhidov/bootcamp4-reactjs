import React from 'react';
import { useState } from 'react';
import Button from './Button';

function Navbar() {
    const [topLinks, setTopLinks] = useState(['Доставка', 'Оплата', 'Отзывы', 'Вопрос - ответ', 'Контакты']);
    const [bottomLinks, setBottomLinks] = useState(['Парикмахерская', 'Барбершоп', 'Маникюр', 'Педикюр', 'Массаж', 'Мебель']);

    return (
        // <div className='navbar'>
        //     <header>
        //         {
        //             topLinks.map((item, index) => (
        //                 <a href="#" key={index}>{item}</a>
        //             ))
        //         }
        //     </header>
        //     <div className="center">
        //         <div className="logo">
        //             <img src="" alt="" />
        //             <h1>BEAUTY</h1>
        //         </div>

        //         <div className="input">
        //             <span>🔍</span>
        //             <input type="text" name="search" id="search" />
        //         </div>

        //         <p>+330040804</p>

        //         <Button rang={'#F13C6E'} text={'#000'} />
        //     </div>
        // </div>

        // Navbar | Saytning eng yuqori qism
        <div class="navbar">
            <div class="nav_yuqori">
                <p>
                    {
                        topLinks.map((item, index) => (
                            <a href="/" key={index}>{item}</a>
                        ))
                    }
                </p>
            </div>
            <div class="nav_center">
                <div class="logo">
                    <img src="./img/logo.png" alt="logo" />
                    <h1>BEAUTY</h1>
                </div>

                <div class="inp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_24_36)">
                            <path
                                d="M19.7122 17.9343L15.1826 13.5835C16.296 12.205 16.9605 10.4767 16.9605 8.6007C16.9605 4.10871 13.1563 0.454529 8.47962 0.454529C3.8042 0.454268 0 4.10845 0 8.6007C0 13.0929 3.8042 16.7474 8.47988 16.7474C10.4968 16.7474 12.3506 16.0666 13.8079 14.933L18.322 19.2689C18.513 19.4534 18.7653 19.5457 19.0166 19.5457C19.2689 19.5457 19.5202 19.4534 19.7122 19.2689C20.096 18.8997 20.096 18.3033 19.7122 17.9343ZM1.96629 8.6007C1.96629 5.15056 4.88859 2.34411 8.47988 2.34411C12.0722 2.34411 14.9945 5.15056 14.9945 8.6007C14.9945 12.0508 12.0722 14.8591 8.47988 14.8591C4.88859 14.8591 1.96629 12.0506 1.96629 8.6007Z"
                                fill="#BDBDBD" />
                        </g>
                        <defs>
                            <clipPath id="clip0_24_36">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <input type="text" name="search" id="search" />
                </div>

                <p>+998330040804</p>

                <Button rang={'#f13c6e'} text={'Обратный звонок'} />
            </div>
            <div class="nav_past">
                <p>
                    {
                        bottomLinks.map((item, index) => (
                            <a href="/" key={index}>{item}</a>
                        ))
                    }
                </p>
            </div>
        </div>
    );
}

export default Navbar;