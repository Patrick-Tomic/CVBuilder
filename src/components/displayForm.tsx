/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key } from "react";
import CollapsedForm from "./CollapsedForm";
export default function DisplayForms({
    forms, onChange, onCancel, onHide, toggleCollapse, onRemove, 
    FormComponent,titleKey, arrayName}:any){
        return (
            <div className = "forms-container">
                {forms.map((form: { [x: string]: any; collapsed: any; id: Key | null | undefined; }) => 
                form.collapsed ? (
                    <CollapsedForm onClick = {toggleCollapse}
                    key = {form.id}
                    form = {form}
                    title = {form[titleKey]}
                    arrayName={arrayName}
                    hideForm = {onHide}
                    /> ): (
                        <FormComponent 
                        onChange = {onChange}
                        form = {form}
                        key = {form.id}
                        cancel = {onCancel}
                        save = {toggleCollapse}
                        remove = {onRemove}
                        />
                    )
                    )}
            </div>
        )
    }