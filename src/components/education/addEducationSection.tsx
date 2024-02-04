/* eslint-disable @typescript-eslint/no-explicit-any */
import EducationForm from "./educationForm";
import DisplayForms from "../displayForm";
import CreateForm from "../createForm";
 export default function AddEducationComponent(props:any){
    
   
    return (
        <div className="educationSection addEducationSection w-[100%] max-h-[80%] flex flex-col"  id="hidden" >
            <div className=" overflow-auto mb-5">
         <DisplayForms 
        forms={props.educations}  
        FormComponent = {EducationForm}
        onChange = {props.onChange} 
        remove = {props.onRemove}
        toggleCollapse = {props.toggleCollapse}
        arrayName = 'educations'
        />
        </div>
        <CreateForm onclick= {props.createForm } text="Education"/>
        <div className="flex justify-around  ">
        <button className="w-[6vw] h-[5vh] border-2 rounded-xl border-black hover:bg-hover font-bold" onClick={() =>{
            document.querySelector('#education')?.setAttribute('id','hidden')
            document.querySelector('.contact')?.setAttribute('id','personal')
        }}>Back</button>
        <button className="w-[6vw] h-[5vh] border-2 rounded-xl border-black hover:bg-hover font-bold" onClick={() => {
            document.querySelector('.educationSection')?.setAttribute('id','hidden')
            document.querySelector('.experienceSection')?.setAttribute('id' , 'experience')
          
                const collapsed = document.querySelectorAll('.collapsedForm')
                collapsed.forEach((form) => {
                    form.setAttribute('style','display:block;')
                })
        }}>Next</button>
        </div>
        </div>
      
    )
}  