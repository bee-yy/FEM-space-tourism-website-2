import './technology.styles.css'
import { useState } from 'react'
import TabButton from '../../components/tab-button/tabButton.component'
import data from '../../data.json'
import TabContent from '../../components/tab-content/tabContent.component'


import technology1Img from '../../assets/technologyA.png'
import technology2Img from '../../assets/technologyB.png'
import technology3Img from '../../assets/technologyC.png'



function Technology(){
   
   const technologies = data.technology;
   let[activeContentIndex, setActiveContentIndex] = useState(0);
  
      const imagesMap = {
        0: technology1Img,
        1: technology2Img,
        2: technology3Img,
    }

   let selectedTechnologyImage = <div className="technology-image-wrapper">
            <img src={imagesMap[activeContentIndex]} alt={technologies[activeContentIndex].name} />
        </div>
       
return(

    <section id='technology-section'>

    <p className='technology-page-title text-preset-6' > <span className='opacity-25'> 03 </span>SPACE LAUNCH 101</p>

<div className="technologies-content-wrapper">

    <div className="technologies-content-lhs">
   {selectedTechnologyImage}

    </div>


    
 <div className="technologies-content-rhs">
<div className="technology-tab-buttons">
    <TabButton isSelected = {activeContentIndex === 0} onClick = {()=>{setActiveContentIndex(0)}} preset = {4}> 1  </TabButton>
    <TabButton isSelected = {activeContentIndex === 1}  onClick = {()=>{setActiveContentIndex(1)}} preset = {4}> 2  </TabButton>
    <TabButton isSelected = {activeContentIndex === 2}  onClick = {()=>{setActiveContentIndex(2)}}preset = {4} > 3  </TabButton>
</div>
<div className="technology-texts">
    <TabContent subtitle= 'THE TERMINOLOGY…' presetValue={3} name = {technologies[activeContentIndex].name} description ={technologies[activeContentIndex].description}/>
</div>
   
    </div>

    </div>
    </section>
)

}

export default Technology;

