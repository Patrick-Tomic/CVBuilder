/* eslint-disable @typescript-eslint/no-explicit-any */
import EducationForm from "./educationForm";
import DisplayForms from "../displayForm";
import CreateForm from "../createForm";
 export default function AddEducationComponent(props:any){
    
   
    return (
        <div className="educationSection addEducationSection w-[100%]"  id="hidden" >
        <DisplayForms 
        forms={props.array}  
        FormComponent = {EducationForm}
        onChange = {props.onChange} 
        onCancel = {props.onCancel}
        onHide = {props.onHide}
        onRemove = {props.onRemove}
        toggleCollapse = {props.toggleCollapse}
        arrayName = 'educations'
        />
        <CreateForm onclick= {props.createForm } text="Education"/>
        </div>
    )
}  