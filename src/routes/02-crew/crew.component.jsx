import { useState } from 'react'
import TabButton from '../../components/tab-button/tabButton.component'
import data from '../../data.json'
import TabContent from '../../components/tab-content/tabContent.component'

import './crew.styles.css'


import crew1Img from '../../assets/douglasHurley.png'
import crew2Img from '../../assets/markShuttleworth.png'
import crew3Img from '../../assets/victorGlover.png'
import crew4Img from '../../assets/anoushehAnsari.png'



function Crew(){
   
   const crews = data.crew;
    let[activeContentIndex, setActiveContentIndex] = useState(0);
  
      const imagesMap = {
        0: crew1Img,
        1: crew2Img,
        2: crew3Img,
        3: crew4Img,
    }

   let selectedCrewImage = <div className="crew-image-wrapper doughlas">
            <img src={imagesMap[activeContentIndex]} alt={`crew member 1`} />
        </div>
       
return(

    <section id='crew-section'>

    <p className='text-preset-6 title title' > <span className='opacity-25'> 02 </span>MEET YOUR CREW</p>

<div className="crew-content-wrapper">

    <div className="crew-content-lhs">
   
   <TabContent subtitle = {crews[activeContentIndex].role} name = {crews[activeContentIndex].name} description = {crews[activeContentIndex].bio} presetValue ={3} />


    <div className="pagination-dots">
        <TabButton isSelected = {activeContentIndex === 0} onClick = {() =>{
            setActiveContentIndex(0)}}> <span className="dot"></span> </TabButton>
         
         <TabButton isSelected = {activeContentIndex === 1} onClick = {() =>{
            setActiveContentIndex(1)}}> <span className="dot"></span> </TabButton>
          
          <TabButton isSelected = {activeContentIndex === 2} onClick = {() =>{
            setActiveContentIndex(2)}} > <span className="dot"></span> </TabButton>
           
           <TabButton isSelected = {activeContentIndex === 3} onClick = {() =>{
            setActiveContentIndex(3)}}> <span className="dot"></span> </TabButton>
    </div>
    </div>


    
 <div className="crew-content-rhs">

    {selectedCrewImage}
    </div>

    </div>
    </section>
)

}


export default Crew;