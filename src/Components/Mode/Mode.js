import React from 'react';
import './Mode.css';

const Mode=({onInputChange})=>{
    return(
        <div className='flex ma2 '> 
            <label className="switch">
               <input type="checkbox" onInput={onInputChange}/>
                   <span className="slider round"></span>
            </label>
            
        </div>
    );
}

export default Mode;