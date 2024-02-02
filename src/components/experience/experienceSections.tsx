import DisplaySections from "../displaySections";
import ExperienceInfoSection from "./experienceSection";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ExperienceSections({experience}:any){

    return (
        <div>
            <DisplaySections
            array = {experience}
            InfoComp = {ExperienceInfoSection}
            title = 'Experience'
            />
        </div>
    )
}