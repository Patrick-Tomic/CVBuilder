/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler } from "react";
import InputSection from "../input";
export default function ExperienceForm(props: { form: any; onChange: any; save: MouseEventHandler<HTMLButtonElement> | undefined; remove: MouseEventHandler<HTMLButtonElement> | undefined; }){
    const form = props.form
    const onChange = props.onChange
    return(
        <>
        <h1>Experience Information</h1>
        <form key = {form.id} id = {form.id} onSubmit={(e) =>e.preventDefault()} data-array-name='experience'>
            <InputSection 
                value = {form.title}
                dataKey = "title"
                placeholder="Web Developer"
                text="Job Title:"
                onChange={onChange}
                type="text"
            />
            <InputSection
                value = {form.company} 
                dataKey="company"
                placeholder="Publix Corp."
                text="Company Name:"
                onChange={onChange}
                type="text"
            />
            <InputSection
                value = {form.location}
                dataKey="location"
                placeholder="Tampa,FL"
                text="Location:"
                onChange={onChange}
                type="text"
            />
            <InputSection
                value = {form.startDate}
                dataKey="startDate"
                placeholder="12/2022"
                text="Start Date:"
                onChange={onChange}
                type="text"
            />
            <InputSection
            value={form.endDate}
            dataKey="endDate"
            placeholder="present"
            text="End Date:"
            onChange={onChange}
            type="text"
            />
            <button type="submit" onClick={props.save}>Submit</button>
            <button onClick={props.remove}>Remove</button>
        </form>
        </>
    )
}