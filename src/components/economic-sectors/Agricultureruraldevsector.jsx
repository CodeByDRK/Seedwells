import React, { useState } from 'react'
import Arrowdown from '../../img/arrow-down.png';

export default function Agricultureruraldevsector() {

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
      <h3 id='Agriculture'>Agriculture and Rural Development</h3>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Other Agricultural Priority Programmes</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Other Agricultural Priority Programmes" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>ASAL Development Project</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "ASAL Development Project" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Land Use Master Plan</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Land Use Master Plan" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Fertilizer Cost Reduction Strategy</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Fertilizer Cost Reduction Strategy" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>ASAL Development – Irrigation</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "ASAL Development – Irrigation" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Fisheries Development and Management</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Fisheries Development and Management" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Establishment of Disease Free Zones (DFZ)</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Establishment of Disease Free Zones (DFZ)" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Implementation of the Consolidated Agricultural Reform Legislations</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Implementation of the Consolidated Agricultural Reform Legislations" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Development of Disease Free Zones</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Development of Disease Free Zones" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Fertilizer Cost Reduction Investment</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Fertilizer Cost Reduction Investment" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      {/*Development box*/}
      <div className="dev-box">
        <h4 onClick={activator} ><p>Consolidated Agriculture Policy and Legal Framework</p> <img src={Arrowdown} alt="" /></h4>
        <div className={ active == "Consolidated Agriculture Policy and Legal Framework" ? 'box-info' : 'hidden-sector'}>
          <div className="dev-about">
            <p><span>About :</span> 404,800 hectares will be put under irrigation by 2017 especially in the Arid and Semi Arid area in Turkana and Tana Delta.  </p>
            <p><span>Impact :</span> Increase irrigated land by million acres (especially in Turkana and Tana Delta) </p>
          </div>
        </div>
      </div>

      
    </div>
  )
}
