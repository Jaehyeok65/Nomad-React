import React from 'react';
import { useState } from 'react';
import MinitToHour from './MinitToHour';
import KmToMiter from './KmToMiter';


function App() {

  const [index,setIndex] = useState("-1");

  const onSelect = (event) => {
    setIndex(event.target.value);
  }

  console.log(index);

  
  
  return (
    <div className="App">
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="-1">Select</option>
        <option value="0">Minit</option>
        <option value="1">Meter</option>
      </select>
      <hr/>
      {index === "-1" ? <h2>Select your Unit</h2> : null}
      {index === "0" ? <MinitToHour title={"Minit"} content={"Hour"} /> : null }
      {index === "1" ? <KmToMiter title={"Km"} content={"Meter"} /> : null }
    </div>
  );
}

export default App;
