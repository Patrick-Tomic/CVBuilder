import React from "react";
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DisplaySections({array, InfoComp, title}:any){
   
return(
    <React.Fragment>
       {
        !array.every((object:{degree:string; name:string; location:string; start:string; end:string; isHidden:boolean;}) => object.isHidden) && (
            <h2 className="sectionHeader">{title}</h2>
        )
       }
        {
        array.map((obj:{degree:string; name:string; location:string; start:string; end:string; isHidden:boolean;}) => !obj.isHidden && <InfoComp props = {obj} />)
        }
    </React.Fragment>
)
}