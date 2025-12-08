export default function TabButton(props){

    return(
         <li className={props.isSelected ? `text-preset-${props.preset} active`: `text-preset-${props.preset}`} onClick={props.onClick}> <button>{props.children}</button></li>
    )

}

