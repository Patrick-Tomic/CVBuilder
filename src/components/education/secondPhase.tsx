/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
 
import InputSection from "../input"
export default function EducationForm({onChange, degree, name, field,location, start,end, id}:any){
    return(
        <div    className="educationForm w-[75%] h-[80%] flex flex-col  ">
            <h1 className="self-center font-signika text-4xl">Education Information</h1>
            <div className="bg-steel flex mt-5 text-white flex-col items-center h-[100%]  rounded-xl p-2">
                <form className="flex h-[90%] justify-around flex-col" action="">
                <InputSection
                    value = { name}
                    dataKey="name"
                    placeholder="University of South Florida"
                    text="Institution:"
                    onChange={ onChange}
                    type = 'text'
                    />
                    <InputSection 
                    value = { degree}
                    placeholder="Bachelors"
                    text = 'Degree Type:'
                    onChange = {onChange}
                    type = 'text'
                    dataKey="degree"
                    />
                     <InputSection 
                    value = {field}
                    placeholder="Information & Computer Science"
                    text = 'Field:'
                    onChange = {onChange}
                    type = 'text'
                    dataKey="field"
                    />
                     <InputSection 
                    value = { location}
                    placeholder="Tampa,Fl:"
                    text = 'Location:'
                    onChange = {onChange}
                    type = 'text'
                    dataKey="location"
                    />
                      <InputSection 
                    value = { start}
                    placeholder="09/21/2017"
                    text = 'Start Date:'
                    onChange = { onChange}
                    type = 'date'
                    dataKey="start"
                    />
                      <InputSection 
                    value = { end}
                    placeholder="10/22/2019"
                    text = 'End Date:'
                    onChange = {onChange}
                    type = 'date'
                    dataKey="end"
                    />
            </form>
            
            </div>
        </div>

    )

}