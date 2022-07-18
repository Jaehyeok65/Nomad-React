import React from "react";
import { useState } from "react";


const MinitToHour = ({ title, content}) => {

    const [amount,setAmount] = useState(0);
    const [toggle,setToggle] = useState(false);

    const reset = () => {
        setAmount(0);
    }

    const invert = () => {
        reset();
        setToggle((current) => !current);
    }

    const Change = (event) => {
        setAmount(event.target.value);
    }

    

    return (
        <>
        <label htmlFor="minit">{title}</label>
        <input id="minit" placeholder="Minit" value={!toggle ? amount : amount * 60} type="number" onChange={Change} disabled={toggle}/>
        <br/>
        <label htmlFor="hour">{content}</label>
        <input id="hour" placeholder="Hour" value={!toggle ? Math.round(amount / 60) : amount} type="number" onChange={Change} disabled={!toggle}/>
        <br/>
        <button onClick={reset}>Reset</button>
        <button onClick={invert}>invert</button>
        </>
    );
}

export default MinitToHour;