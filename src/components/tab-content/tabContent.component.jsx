
function TabContent (props){

 return(
     <div>
    <p className='subtitle upper-case text-preset-4'> {props.subtitle} </p>
        <p className={`destination-title crew-member text-preset-${props.presetValue} upper-case`}> {props.name}</p><p className='description text-preset-9 blue'>{props.description}</p>
  </div>

  
  )

  }

  export default TabContent;