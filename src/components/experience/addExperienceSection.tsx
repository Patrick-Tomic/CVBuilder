import DisplayForms from "../displayForm";
import CreateForm from "../createForm";
import ExperienceForm from "./experienceForm";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ExperienceComponent(props:any){

    return(
        <div id='hidden'className="experienceSection w-[100%] max-h-[80%] flex flex-col" >
              <div className=" overflow-auto mb-5">
            <DisplayForms 
            forms = {props.experiences}
            FormComponent = {ExperienceForm}
            onChange = {props.onChange}
            
            remove = {props.onRemove}
            toggleCollapse = {props.toggleCollapse}
            arrayName = 'experience'
            />
            </div>
            <CreateForm onclick={props.createForm} text='Experience'/>
            <div className="flex justify-around">
            <button className="w-[6vw] h-[5vh] border-2 rounded-xl border-black hover:bg-hover font-bold" onClick = {() => {
                  document.querySelector('.experienceSection')?.setAttribute('id','hidden')
                  document.querySelector('.educationSection')?.setAttribute('id','education')
                  const collapsed = document.querySelectorAll('.collapsedForm')
                  collapsed.forEach((form) => {
                      form.setAttribute('style','display:block;')
                  })
            }}>Back</button>
            <button className="w-[6vw] h-[5vh] border-2 rounded-xl border-black hover:bg-hover font-bold" onClick={() =>{
                document.querySelector('#experience')?.setAttribute('id','hidden')
                document.querySelector('.skillSection')?.setAttribute('id','skills')
                document.querySelector('#Skills')?.setAttribute('style','display:none')
            }}>Next</button>
            </div>
        </div>
    )
}