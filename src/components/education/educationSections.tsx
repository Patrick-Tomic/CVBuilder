/* eslint-disable @typescript-eslint/no-explicit-any */
import DisplaySections from "../../displaySections";
export default function EducationSections(array: any, infoComp: any, title: any){
    
    return(
        <div>
            <DisplaySections 
            array = {array}
            infoComp = {infoComp}
            title = {title}
            />
        </div>
    )
}