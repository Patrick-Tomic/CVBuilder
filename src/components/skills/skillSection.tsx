import DisplaySections from "../displaySections";
import SkillsInfo from "./skillInfo";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SkillsSection({skills}:any){
    
    return(
        <div>
            <DisplaySections
            array ={skills}
            InfoComp = {SkillsInfo}
            title = 'Skills'
            />
        </div>
    )
}