/* eslint-disable @typescript-eslint/no-explicit-any */
import EducationForm from "./educationForm";
import DisplayForms from "../displayForm";
import CreateForm from "../createForm";
 export default function AddEducationComponent(props:any){
    const educations = props.infoArray
   
    return (
        <div className="educationSection addEducationSection" /* id="hidden" */>
        <DisplayForms 
        array={educations}  
        FormComponent = {EducationForm}
        onChange = {props.onChange} 
        onCancel = {props.onCancel}
        onHide = {props.onHide}
        onRemove = {props.onRemove}
        toggleCollapse = {props.toggleCollapse}
        titleKey = 'SchoolName'
        arrayName = 'educations'
        />
        <CreateForm onclick= { () =>{console.log('click')}} text="Education"/>
        </div>
    )
}  