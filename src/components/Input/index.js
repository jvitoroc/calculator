import React from 'react';
import style from "./style.css";

function Input(props){
    return (
        <div className={style.Input}>
            <input type="text"
                    value={props.value}
                    onChange={props.onChange}/>
        </div>
    );
}

export default Input;