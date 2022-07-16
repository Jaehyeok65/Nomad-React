import React from "react";
import { useState } from "react";


const KmToMiter = () => {

    const [meter,setMeter] = useState(0);
    const [toggle,setToggle] = useState(false);

    const reset = () => {
        setMeter(0);
    }

    const invert = () => {
        reset();
        setToggle((current) => !current);
    }

    const Change = (event) => {
        setMeter(event.target.value);
    }

    

    return (
        <>
        <label htmlFor="meter">miter</label>
        <input id="meter" placeholder="Miter" value={!toggle ? meter : meter * 1000} type="number" onChange={Change} disabled={toggle}/>
        <br/>
        <label htmlFor="km">Km</label>
        <input id="km" placeholder="Km" value={!toggle ? Math.round(meter / 1000) : meter} type="number" onChange={Change} disabled={!toggle}/>
        <br/>
        <button onClick={reset}>Reset</button>
        <button onClick={invert}>invert</button>
        </>
    );
}

export default KmToMiter;