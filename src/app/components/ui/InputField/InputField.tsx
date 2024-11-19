'use client'

import { FC, useState } from "react";

interface IInputField {
    label:string,
    type:string,
    name:string,
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
    value: string,
    errors?: string | undefined,
}

const InputField:FC<IInputField> = (props) => {
    const [value, setValue] = useState<string>(props.value)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        props.onChange(event);
    };

    return(
        <div>
            <label title={props.label}/>
            <input type={props.type} value={value} onChange={handleChange} onBlur={props.onBlur} name={props.name}/>
            <p>{props.errors}</p>
        </div>
    )
}
export default InputField;