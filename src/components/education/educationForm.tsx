/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import InputSection from "../input"
export default function EducationForm(props:{onChange?:any, form?:any,cancel?:any,save?:any,remove?:any }){
    const form = props.form  
    const onChange = props.onChange
   
    return(
      
   <>
            <h1 className="self-center font-signika text-4xl">Education Information</h1>
          
                <form className="section-form education-form flex  justify-around flex-col bg-steel  mt-5 text-white  items-center h-[100%]  rounded-xl p-2" key={form.id} id = {form.id}   onSubmit={(e) => e.preventDefault()}  data-array-name="educations">
                <InputSection
                    value = {form.name}
                    dataKey="name"
                    placeholder="University of South Florida"
                    text="Institution:"
                    onChange={onChange}
                    type = 'text'
                    />
                    <InputSection 
                    value = {form.degree}
                    placeholder="Bachelors of Business"
                    text = 'Degree Type:'
                    onChange = {onChange}
                    type = 'text'
                    dataKey="degree"
                    />
                     <InputSection 
                    value = {form.location}
                    placeholder="Tampa,Fl:"
                    text = 'Location:'
                    onChange = {onChange}
                    type = 'text'
                    dataKey="location"
                    />
                      <InputSection 
                    value = {form.start}
                    placeholder="09/2017"
                    text = 'Start Date:'
                    onChange = {onChange}
                    type = 'string'
                    dataKey="start"
                    />
                      <InputSection 
                    value = {form.end}
                    placeholder="12/2019"
                    text = 'End Date:'
                    onChange = {onChange}
                    type = 'string'
                    dataKey="end"
                    />
                    <div>
                    <button type="button" onClick = {props.cancel}>Cancel</button>
                    <button type="submit"
                    onClick={ props.save}
                     className="border-2 border-black bg-white text-black rounded w-fit p-1 ml-[5vw]">Submit</button>
                     <button type="button" onClick={props.remove}>Remove</button>
                     </div>
            </form>
        </>

    )

}