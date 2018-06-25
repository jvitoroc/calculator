import React from 'react';
import style from "./style.css";

function Button(props){
    var localStyle = {
        backgroundColor: props.background,
        color: props.color
    }

    return (
        <div onClick={props.onClick} style={localStyle} 
            className={style.Button}>
            {props.value}
        </div>
    );
}

Button.defaultProps = {
    background: "#303030",
    color: "#dddddd"
}

export default Button;