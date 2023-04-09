import React from "react";


function InputWithLabel({title, onChange, className, type, placeHolder, name}){
    return(
        <div>
            <label>{title}</label>
            <input
                onChange={onChange}
                name={name}
                placeholder={placeHolder}
                type={type}
                className={className}
            />
        </div>
    )
}
export default InputWithLabel