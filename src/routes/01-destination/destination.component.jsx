import './destination.styles.css'
import { useState } from 'react'
import TabButton from '../../components/tab-button/tabButton.component'
import data from '../../data.json'
import TabContent from '../../components/tab-content/tabContent.component'


import moonImage from '../../assets/moon.png';
import marsImage from '../../assets/mars.png';
import europaImage from '../../assets/europa.png'
import titanImage from '../../assets/titan.png'



function Destination(){
   
   const destinations = data.destinations;
    let[activeContentIndex, setActiveContentIndex] = useState(0);
  
  
      const imagesMap = {
        0: moonImage,
        1: marsImage,
        2: europaImage,
        3: titanImage,  
    }

   

   let selectedDestinationImage = <div className="destination-image-wrapper">
            <img src={imagesMap[activeContentIndex]} alt={`An image of the ${destinations[activeContentIndex].name}`} />
        </div>
       
return(
    <section id='destination-section'>

    <p className='text-preset-6 title title' > <span className='opacity-25'> 01 </span>PICK YOUR DESTINATION</p>

    <div className='content-wrapper'>

        <div className="content-lhs">
           {selectedDestinationImage}
        </div>
    

    <section className='content-rhs'>
       <div className="tab-buttons">

    <menu>
            <TabButton isSelected = {activeContentIndex === 0} onClick = {()=>setActiveContentIndex(0)} preset = {8}> MOON </TabButton>

            <TabButton isSelected = {activeContentIndex === 1} onClick = {()=> setActiveContentIndex(1)} preset = {8} > MARS </TabButton>

          <TabButton isSelected = {activeContentIndex === 2} onClick = {()=> setActiveContentIndex(2)} preset = {8}> EUROPA </TabButton>

           <TabButton isSelected = {activeContentIndex === 3} onClick = {()=>setActiveContentIndex(3)} preset = {8}> TITAN </TabButton>
    </menu>

    </div>

       {/* {selectedDestination} */}
    <div className='tab-content'>
    
     <TabContent name ={destinations[activeContentIndex].name} presetValue ={2}
     description ={destinations[activeContentIndex].description} dest =  {destinations[activeContentIndex].distance}
      travel ={destinations[activeContentIndex].travel}
      />
    <hr />
          <article className='statistics'>
              {/* left hand side */}
              <div >
              <p className="average-distance blue text-preset-7">
                  AVG. DISTANCE
              </p>
              <p className="average-distance-value text-preset-6 upper-case">
            {destinations[activeContentIndex].distance}
              </p>
              </div>
  
   {/* right hand side */}
               <div >
              <p className="estimated-time blue text-preset-7 " >
                 EST. TRAVEL TIME
              </p>
              <p className="estimated-days upper-case">
                 {destinations[activeContentIndex].travel}
              </p>
              </div>
              
          </article>
           </div>
     

        
    </section>
 </div>
    </section>
)

}


export default Destination;