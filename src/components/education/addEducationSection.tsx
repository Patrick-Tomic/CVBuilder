/* eslint-disable @typescript-eslint/no-explicit-any */
import EducationForm from "./educationForm";
import CreateForm from "../createForm";
 export default function AddEducationComponent(props:any){
    const educations = props.infoArray
    const educationProp =  props.education
    
    return (
        <div className="educationSection" /* id="hidden" */>
        <EducationForm array={educations} id = {id} onChange = {props.onChange} degree = {educationProp.degree} name = {educationProp.name }field = {educationProp.field } location = {educationProp.location } start = {educationProp.start }end= {educationProp.end } id= {educationProp.id } />
        <CreateForm onclick= { () =>{console.log('click')}} text="Education"/>
        </div>
    )
}  