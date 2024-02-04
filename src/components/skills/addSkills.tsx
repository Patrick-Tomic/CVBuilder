import CreateForm from "../createForm";
import DisplayForms from "../displayForm";
import SkillForm from "./skillInput";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AddSkills(props:any){
    return(
        <div className="skillSection addSkills w-[100%] flex flex-col" id='hidden'>
            <DisplayForms forms = {props.skills}
                FormComponent = {SkillForm}
                onChange = {props.onChange}
                remove = {props.onRemove}
                toggleCollapse = {props.toggleCollapse}
                arrayName = 'skills'
                />
                <CreateForm onclick = {props.createForm} text='Skills'/>
                <div className="flex justify-around  ">
                <button className="w-[6vw] h-[5vh] border-2 rounded-xl border-black hover:bg-hover font-bold" onClick={() =>{
            document.querySelector('#skills')?.setAttribute('id','hidden')
            document.querySelector('.experienceSection')?.setAttribute('id','experience')
        }}>Back</button>
        <button className="w-[6vw] h-[5vh] border-2 rounded-xl border-black hover:bg-hover font-bold" onClick={() => {
            document.querySelector('.skillSection')?.setAttribute('id','hidden')
            document.querySelector('#experience')?.setAttribute('style','display:block')
            const collapsed = document.querySelectorAll('.collapsedForm')
                  collapsed.forEach((form) => {
                      form.setAttribute('id','experience') })   
        }}>Next</button>
        </div>
        </div>
    )
}