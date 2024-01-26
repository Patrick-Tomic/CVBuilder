/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
 
import InputSection from "../input"
export default function EducationForm({array, onChange, degree, name,location, start,end, id}:any){
    return(
        <div  className="educationForm sectionForm w-[75%] h-[80%] flex flex-col  ">
            <h1 className="self-center font-signika text-4xl">Education Information</h1>
            <div className="bg-steel flex mt-5 text-white flex-col items-center h-[100%]  rounded-xl p-2">
                <form className="flex h-[90%] justify-around flex-col" id={id} onSubmit={(e) => e.preventDefault()} data-array-name="educations">
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
                    placeholder="Bachelors of Business"
                    text = 'Degree Type:'
                    onChange = {onChange}
                    type = 'text'
                    dataKey="degree"
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
                    placeholder="09/2017"
                    text = 'Start Date:'
                    onChange = { onChange}
                    type = 'string'
                    dataKey="start"
                    />
                      <InputSection 
                    value = { end}
                    placeholder="12/2019"
                    text = 'End Date:'
                    onChange = {onChange}
                    type = 'string'
                    dataKey="end"
                    />
                    <button type="submit"  
                     className="border-2 border-black bg-white text-black rounded w-fit p-1 ml-[5vw]">Submit</button>
            </form>
            
            </div>
        </div>

    )

}