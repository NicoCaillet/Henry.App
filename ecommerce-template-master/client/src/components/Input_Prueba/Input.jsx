import React from 'react';
import s from "./input.module.css"
export default function Input(){


    return(
        <div>
            <form>
                <input type="text" placeholder="Nombre" />
                <input type="password" placeholder="Password" />
                <div className={s.color} >
                    Hola cabros como estan 
                </div>           
            </form>
        </div>
    )
}