import React, { useState } from 'react'
import Arrowdown from '../../img/arrow-down.png';

export default function Financialservices() {

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
      <h3 id='Agriculture'>Financial Services</h3>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Financial Services</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Financial Services" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Deepening of Capital Markets</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Deepening of Capital Markets" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Nairobi International Financial Centre (NIFC)</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Nairobi International Financial Centre (NIFC)" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      
    </div>
  )
}
