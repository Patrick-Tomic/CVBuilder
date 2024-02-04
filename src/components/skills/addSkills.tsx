import CreateForm from "../createForm";
import DisplayForms from "../displayForm";
import SkillForm from "./skillInput";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AddSkills(props:any){
    return(
        <div className="skillSection addSkills w-[100%] max-h-[80%] flex flex-col" id='hidden'>
              <div className=" overflow-auto mb-5"> 
            <DisplayForms 
            forms = {props.skills}
                FormComponent = {SkillForm}
                onChange = {props.onChange}
                remove = {props.onRemove}
                toggleCollapse = {props.toggleCollapse}
                arrayName = 'skills'
                />
                </div>
                <CreateForm onclick = {props.createForm} text='Skills'/>
                <div className="flex justify-around  ">
                <button className="w-[6vw] h-[5vh] border-2 rounded-xl border-black hover:bg-hover font-bold" onClick={() =>{
            document.querySelector('#skills')?.setAttribute('id','hidden')
            document.querySelector('.experienceSection')?.setAttribute('id','experience')
        }}>Back</button>
        <button className="w-[6vw] h-[5vh] border-2 rounded-xl border-black hover:bg-hover font-bold" onClick={() => {
            document.querySelector('.skillSection')?.setAttribute('id','hidden')
            document.querySelector('#resume')?.setAttribute('style','width:100%; border-left:none;')
            document.querySelector('#form')?.setAttribute('style','width:0%;')
            document.querySelector('main')?.setAttribute('style','width:50%; border-2px black solid')
        }}>Finish</button>
        </div>
        </div>
    )
}