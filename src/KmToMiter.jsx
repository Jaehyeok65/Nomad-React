import React from "react";
import { useState, useEffect } from "react";


const KmToMiter = ({title,content}) => {

    const [meter,setMeter] = useState(0);
    const [toggle,setToggle] = useState(false);

    useEffect( () => {
        console.log('create km');
        return () => {
            console.log('destory km');
        }
    },[])

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
        <label htmlFor="km">{title}</label>
        <input id="km" placeholder="Km" value={!toggle ? Math.round(meter / 1000) : meter} type="number" onChange={Change} disabled={!toggle}/>
        <br/>
        <label htmlFor="meter">{content}</label>
        <input id="meter" placeholder="Miter" value={!toggle ? meter : meter * 1000} type="number" onChange={Change} disabled={toggle}/>
        <br/>
        <button onClick={reset}>Reset</button>
        <button onClick={invert}>invert</button>
        </>
    );
}

export default React.memo(KmToMiter);