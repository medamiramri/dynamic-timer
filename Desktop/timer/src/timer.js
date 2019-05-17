import React from 'react';
  

function Timer(props){
let secondsNumber=props.time;
let hours= Math.floor(secondsNumber/3600);
secondsNumber %= 3600;
let minutes=Math.floor(secondsNumber/60);
let seconds=secondsNumber%60 
return(
    <div className='global'>
    <div className='component'>
    <h2>{String(hours).padStart(2,"0")}:</h2>
     <p>Hour</p>
     </div>
    <div className='component'>
    <h2>{String(minutes).padStart(2,"0")}:</h2>
     <p>minute</p>
    </div>
    <div className='component'>
    <h2>{String(seconds).padStart(2,"0")}</h2>
    <p>second</p>
    </div>
    </div>
)
  }

  export default Timer