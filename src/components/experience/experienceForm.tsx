/* eslint-disable @typescript-eslint/no-explicit-any */
 
import InputSection from "../input";
export default function ExperienceForm(props: { form: any; onChange: any; save: any; remove:any }){
    const form = props.form
    const onChange = props.onChange
    return(
        <>
        <h1>Experience Information</h1>
        <form className="section-form text-white experience-form flex justify-around flex-col bg-steel mt-5 items-center h-[100%] rounded-xl p-2" key = {form.id} id = {form.id} onSubmit={(e) =>e.preventDefault()} data-array-name='experience'>
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
            <div className="flex justify-around w-[80%]">
            <button type="submit" onClick={(e) =>{
                props.save(e)
               document.querySelector("#Experience")?.setAttribute('style','display:block')
             
            
            }}>Submit</button>
            <button onClick={(e) =>{
                props.remove(e)
                document.querySelector("#Experience")?.setAttribute('style','display:block')
             
            }}>Remove</button>
            </div>
        </form>
        </>
    )
}