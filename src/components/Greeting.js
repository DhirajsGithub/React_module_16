import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [change, setChange] = useState(false);
  return (
    <div>
      <h1>Hellow World!</h1>
      <h2>Greeting From Dhiraj</h2>
      {!change && <Output> <p>good to see you</p></Output>}
      {change && <Output> <p>Changed</p> </Output>}

      {/* so called integral test since we use two components together  */}

      <button onClick={()=>{setChange(true)}} onDoubleClick={()=>{setChange(false)}}>Change Text</button>
    </div>
  );
};

export default Greeting;
