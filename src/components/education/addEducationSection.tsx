/* eslint-disable @typescript-eslint/no-explicit-any */
import EducationForm from "./educationForm";
import DisplayForms from "../displayForm";
import CreateForm from "../createForm";
 export default function AddEducationComponent(props:any){
    
   
    return (
        <div className="educationSection addEducationSection"  id="hidden" >
        <DisplayForms 
        forms={props.array}  
        FormComponent = {EducationForm}
        onChange = {props.onChange} 
        onCancel = {props.onCancel}
        onHide = {props.onHide}
        onRemove = {props.onRemove}
        toggleCollapse = {props.toggleCollapse}
        titleKey = 'name'
        arrayName = 'educations'
        />
        <CreateForm onclick= {props.createForm} text="Education"/>
        </div>
    )
}  