/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DisplaySections(props:any){
    const {array, title, InfoComp} = props 
return(
    <div className="border-b-2 border-black">
    <React.Fragment>
    
       {
        
       !array.every((obj:any) => obj.hidden) && (
        <h2 className="header-text text-center text-2xl font-ptSerika">{title}</h2>
       )
       }
        {
        array.map(
            (obj:{degree:string, name:string, location:string, start:string, end:string, hidden:boolean, collapsed:boolean, id:string}) => !obj.hidden && <InfoComp props = {obj} key ={obj.id}/>)
        }
        
    </React.Fragment>
    </div>
)
}