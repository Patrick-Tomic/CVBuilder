/* eslint-disable @typescript-eslint/no-explicit-any */
import DisplaySections from "../displaySections";
import EducationSection from "./educationInfo";
export default function EducationSections({educations}: any){
   
    return(
        <div>
            <DisplaySections 
            array = {educations}
            InfoComp = {EducationSection}
            title = {'Education'}
            />
        </div>
    )
}