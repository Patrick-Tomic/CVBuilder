/* eslint-disable @typescript-eslint/no-explicit-any */
import DisplaySections from "../displaySections";
import EducationSection from "./educationInfo";
export default function EducationSections({educations}:any){
    
    return(
        <div>
            <DisplaySections 
            array = {educations}
            infoComp = {EducationSection}
            title = {'Education'}
            />
        </div>
    )
}