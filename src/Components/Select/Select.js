import React from 'react';

const Select=({onGo,genre})=>{

    return(
        <div className='f3 pa2'>
            <label htmlFor="----">Select Category : </label>
            <select className='br2' name="category" id="Category" onInput={genre}>
            <option value="null">---Select---</option>
            <option value="dark">Dark</option>
            <option value="programming">Programming</option>
            <option value="pun">Pun</option>
            <option value="christmas">Christmas</option>
            </select>
            <div className="pa3 ph3">
                <button className="f3 link dim br3 ph3 pv2 mb2 dib white bg-light-purple" onClick={onGo}>Go!</button>
            </div>
        </div>
    );
}

export default Select;