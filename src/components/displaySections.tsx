/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DisplaySections(props:any){
    const {array, title, InfoComp} = props 
    const id = title +'Div'
return(
    <div className="border-b-2 border-black" >
    <React.Fragment>
    
       {
        
       !array.every((obj:any) => obj.hidden) && (
        <h2 className="header-text text-center text-2xl font-ptSerika">{title}</h2>
       )
       }
        <div id={id}>
        {
           
        array.map(
            (obj:any) => !obj.hidden && <InfoComp props = {obj} key ={obj.id}/>)
           
        }
         </div>
        
    </React.Fragment>
    </div>
)
}