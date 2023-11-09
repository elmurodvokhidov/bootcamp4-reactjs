import React from 'react';

function Button({rang, text}) {
    return (
        <button className='btn global_btn' style={{border: `2px solid ${rang}`, color: `${text}`}}>Обратный звонок</button>
    );
}

export default Button;