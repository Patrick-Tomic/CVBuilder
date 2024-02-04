/* eslint-disable @typescript-eslint/no-explicit-any */
 
import CollapsedForm from "./CollapsedForm";
export default function DisplayForms({
    forms, onChange, onCancel, onHide, toggleCollapse, remove,
    FormComponent, arrayName}:any){
       
        return (
            <div className = "forms-container w-[85%] h-[80%] flex flex-col m-12  " >
               { forms.map((form:{degree:string, name:string, location:string, start:string, end:string, hidden:boolean, collapsed:boolean, id:string}|
               {title:string; company:string; location:string; startDate:string; endDate:string; collapsed:boolean; id:string }|{skill:string;collapsed:boolean; id:string}) =>                     
      form.collapsed ? (
       <CollapsedForm onClick = {toggleCollapse}
       key = {form.id}
       form = {form}
       arrayName={arrayName}
       hideForm = {onHide}
       /> ):(     
       
           <FormComponent 
           key = {form.id}
           onChange = {onChange}
           form = {form}
           cancel = {onCancel}
           save = {toggleCollapse}
           remove = {remove}
           
           />
)   
       )
       }  
            </div>
        )
    }