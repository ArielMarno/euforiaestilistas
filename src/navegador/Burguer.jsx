import React from 'react';
import './burguer.css';

const Burguer = (props) => {
  return (
    <div>
        <input type="checkbox" id="checkbox" onClick={props.handleClick}/>
        <label for="checkbox" class="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
    </div>
  )
}

export default Burguer