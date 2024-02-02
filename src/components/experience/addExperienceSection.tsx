import DisplayForms from "../displayForm";
import CreateForm from "../createForm";
import ExperienceForm from "./experienceForm";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ExperienceComponent(props:any){

    return(
        <div id='hidden'className="experienceSection w-[100%] flex flex-col" >
            <DisplayForms 
            forms = {props.experiences}
            FormComponent = {ExperienceForm}
            onChange = {props.onChange}
            
            remove = {props.onRemove}
            toggleCollapse = {props.toggleCollapse}
            arrayName = 'experience'
            />
            <CreateForm onclick={props.createForm} text='Experience'/>
            <button>Next</button>
        </div>
    )
}