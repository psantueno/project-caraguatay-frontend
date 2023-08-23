import React from 'react';
import './buttons.css';

export const Loader = ({ loader, text }) => {
    
    return (        
            <div className='loader-containter' style={{ display: loader ? "flex" : "none" }}>
                {text}
                <div className="spinner-border spinner-border-sm m-1" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
    )
}


/* loader= es la prop que recibe el valor de loading, es decir, si es true o false (para mostrarse).

   text= es la prop que recibe el texto que queremos que aparezca cuando se inicia el request a la API.
*/


