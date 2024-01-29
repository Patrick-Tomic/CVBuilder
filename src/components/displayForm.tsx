/* eslint-disable @typescript-eslint/no-explicit-any */
import uniqid from "uniqid";
import CollapsedForm from "./CollapsedForm";
export default function DisplayForms({
    forms, onChange, onCancel, onHide, toggleCollapse, onRemove, 
    FormComponent, arrayName}:any){
        return (
            <div className = "forms-container" >
                {forms.map((form:{degree:string, name:string, location:string, start:string, end:string, hidden:boolean, collapsed:boolean, id:any}) => 
               /*  form.collapsed ? (
                    <CollapsedForm onClick = {toggleCollapse}
                    key = {form.id}
                    form = {form}
                    title = {form.name}
                    arrayName={arrayName}
                    hideForm = {onHide}
                    /> ):( */
                   
                        <FormComponent 
                        onChange = {onChange}
                        form = {form}
                        key={uniqid()}
                        cancel = {onCancel}
                        save = {toggleCollapse}
                        remove = {onRemove}
                        />
                        
             
                  /*   ) */
                    
                    )}
                    
            </div>
        )
    }