import React, { useState } from 'react';
import Arrowdown from '../../img/arrow-down.png';

export default function Bpo() {

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
      <h3 id='Agriculture'>Business Process Outsourcing</h3>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Provision of Incentives</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Provision of Incentives" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Skills Development</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Skills Development" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Marketing Kenya as a BPO Destination</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Marketing Kenya as a BPO Destination" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Establishment of a BPO Park</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Establishment of a BPO Park" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
