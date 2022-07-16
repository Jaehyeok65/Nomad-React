import React from "react";
import { useState } from "react";


const MinitToHour = () => {

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
        <label htmlFor="minit">Minit</label>
        <input id="minit" placeholder="Minit" value={!toggle ? amount : amount * 60} type="number" onChange={Change} disabled={toggle}/>
        <br/>
        <label htmlFor="hour">Hour</label>
        <input id="hour" placeholder="Hour" value={!toggle ? Math.round(amount / 60) : amount} type="number" onChange={Change} disabled={!toggle}/>
        <br/>
        <button onClick={reset}>Reset</button>
        <button onClick={invert}>invert</button>
        </>
    );
}

export default MinitToHour;