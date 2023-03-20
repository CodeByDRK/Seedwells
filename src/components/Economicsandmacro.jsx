import React, { useState } from 'react'
import Contactbg from '../img/contact-bg.png';
import { Agriculturesector, Agricultureruraldevsector,Bpo, Bpoites, Financialservices, Infrastrucure, Landreforms, Manufacturing, Mineralresources, Tourism, Trade } from './economic-sectors';

export default function Economicsandmacro() {

    {/*ID SELECTORS*/}
    const agricultureSector = document.querySelector('Agriculturesector');
    const agricultureRuralDevsector = document.querySelector('Agricultureruraldevsector');
    const bpo = document.querySelector('Bpo');
    const bpoites = document.querySelector('Bpoites');
    const financialServices = document.querySelector('Financialservices');
    const infrastrucure = document.querySelector('Infrastrucure');
    const landreforms = document.querySelector('Landreforms');
    const manufacturing = document.querySelector('Manufacturing');
    const mineralResources = document.querySelector('Mineralresources');
    const tourism = document.querySelector('Tourism');
    const trade = document.querySelector('Trade');

    const [sector, setSector] = useState('Agriculture')

    
    function renderSelector(e) {
        const selected = e.target.innerHTML
        setSector(selected);  
    }

  return (
    <section>
        <div className="header-region">
            <img className='header-r-background' src={Contactbg} alt="" />
            <h2>Economics And Macros Pillar</h2>
        </div>

        <div className="body-region">
            <div className="pillars-container">
                <div className="pillars-selections">
                    <p>Select Sector</p>
                    <div className="pillars-selections-container">
                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Agriculture' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Agriculture
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Agriculture and Rural Development' ? 'active-sector-option' : 'inactive-sector-option'} ></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Agriculture and Rural Development
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Business Process Outsourcing' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Business Process Outsourcing
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Business Process Outsourcing/IT Enabling Services (ITES)' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Business Process Outsourcing/IT Enabling Services (ITES)
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Financial Services' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Financial Services
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Infrastructure' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Infrastructure
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Land Reforms' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Land Reforms
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Manufacturing' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Manufacturing
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Oil and Other Mineral Resources' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Oil and Other Mineral Resources
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Tourism' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Tourism
                        </div>
                    </div>

                    {/*SECTOR OPTION*/}
                    <div className='sector-option-container'>
                        <div className={ sector == 'Trade' ? 'active-sector-option' : 'inactive-sector-option'}></div>
                        <div onClick={renderSelector} className="pillar-option">
                            Trade
                        </div>
                    </div>
                    </div>
                </div>

                <div className="sector-renderer">
                    <div className={ sector === 'Agriculture' ? '' : 'hidden-sector'}><Agriculturesector /></div>
                    <div className={ sector === 'Agriculture and Rural Development' ? '' : 'hidden-sector'}><Agricultureruraldevsector /></div>
                    <div className={ sector === 'Business Process Outsourcing' ? '' : 'hidden-sector'}><Bpo /></div>
                    <div className={ sector === 'Business Process Outsourcing/IT Enabling Services (ITES)' ? '' : 'hidden-sector'}><Bpoites /></div>
                    <div className={ sector === 'Financial Services' ? '' : 'hidden-sector'}><Financialservices /></div>
                    <div className={ sector === 'Infrastructure' ? '' : 'hidden-sector'}><Infrastrucure /></div>
                    <div className={ sector === 'Land Reforms' ? '' : 'hidden-sector'}><Landreforms /></div>
                    <div className={ sector === 'Manufacturing' ? '' : 'hidden-sector'}><Manufacturing /></div>
                    <div className={ sector === 'Oil and Other Mineral Resources' ? '' : 'hidden-sector'}><Mineralresources /></div>
                    <div className={ sector === 'Tourism' ? '' : 'hidden-sector'}><Tourism /></div>
                    <div className={ sector === 'Trade' ? '' : 'hidden-sector'}><Trade /></div>
                </div>
            </div>
        </div>
    </section>
  )
}