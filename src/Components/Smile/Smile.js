import React from 'react';
import './Smile.css';

const Smile=({setup,delivery})=>{

    function onDeliver(){
        const display=document.getElementById('display');
        // console.log(display.classList);
        display.classList.toggle('display');
        // console.log(display.classList);  
    }
    return(
        <div> 
         <p className='f3'>
            {setup}
         </p>
            <div className="pa3 ph3">
                <button className="f3 link dim br3 ph3 pv2 mb2 dib white bg-light-blue"  onClick={onDeliver}>Wanna Know!</button>
            </div>
            <p className='f3 non' id='display'>
                {delivery}
            </p>
        </div>
    );
}

export default Smile;