import React, { useState } from 'react'
import Arrowdown from '../../img/arrow-down.png';

export default function Bpoites() {

  const [active, setActive] = useState('')
  
  function activator(e) {
    const boxTitle = e.target.innerHTML;
    if (active == boxTitle){
      setActive('')
    } else {
      setActive(boxTitle)
      console.log(active)
    }
  }

  return (
    <div className='rendered-container'>
      <h3 id='Agriculture'>Business Process Outsourcing(BPO) / IT Enabled Services (ITES)</h3>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Establishment of Konza Technology City</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Establishment of Konza Technology City" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

    </div>
  )
}
