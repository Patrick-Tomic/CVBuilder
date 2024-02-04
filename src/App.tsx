/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
 
import uniqid from "uniqid";
import Contact from "./components/firstPhase"
import ExperienceComponent from "./components/experience/addExperienceSection";
import AddEducationComponent from "./components/education/addEducationSection"
import { useState } from "react"
import Resume from "./resume"
import AddSkills from "./components/skills/addSkills";
 
interface sections{
    educations:object[]
    experience:object[],
    skills:any[]
}
export default function App(){
 
    

    const [personal, setPersonal] = useState( {
        name:'',
        email: '',
        number: '',
        address: '',
        next:false
       })
    const [sections, setSections] = useState<sections>({
         educations:[
            {
                degree:'',
                name: '',
                location: '',
                start: '',
                end: '',
                hidden:false,
                collapsed:false,
                id:uniqid()
                }
         ],
         experience:[
            {
                title:'',
                company:'',
                location:'',
                startDate:'',
                endDate:'',
                collapsed:false,
                id:uniqid()
            }
         ],
         skills:[{
            skill:'',
            collapsed:false,
            id:uniqid()
         }]
    })
      
  
      const [, setPrevState] = useState(null)
       
      function handleSectionChange(e: { target: { dataset: { key: any; }; value: any; closest: (arg0: string) => any; }; }){
        const {key} = e.target.dataset
        
        const inputValue = e.target.value
        const form = e.target.closest('.section-form')
        const id = form.id
        const {arrayName} = form.dataset 
        const array:'educations'|'experience'|'skills' = arrayName
        const section = sections[array]
        const clone  = section.map((obj:any) => {
                 
            if(obj.id === id) {
                obj[key] = inputValue 
                 return obj
            }  else{
                return obj
            }
        })
        section.push(clone)
         setSections({
            ...sections,
            [arrayName]: clone
            })        
    }  

    function handleContactInfoChange(e: { target: { dataset: { key: any }; value: any } }){
        const {key} = e.target.dataset
         
            setPersonal({...personal, [key]:e.target.value})
    }

    function createForm(arrayName:'educations'|'experience'|'skills', object: { degree: string; name: string; location: string; start: string; end: string; hidden: boolean; collapsed: boolean; id: any; }| 
    {title:string; company:string; location:string; startDate:string; endDate:string; collapsed:boolean; id:string }|{skill:string; collapsed:boolean; id:string}){
        setPrevState(null)
        const section:any[]= structuredClone(sections[arrayName])
        section.push(object)
       
        setSections({...sections, [arrayName]:section})
        return
       }  
//Education Form var
    const createEducationForm = () =>{
        createForm('educations', {
        degree:'',
        name: '',
        location: '',
        start: '',
        end: '',
        hidden:false,
        collapsed:false,
        id:uniqid()
        }) 
    }
        //experience
    const createExperienceForm = () =>{
        createForm('experience',{
            title:'',
            company:'',
            location:'',
            startDate:'',
            endDate:'',
            collapsed:false,
            id:uniqid()
        })
    }
    const createSkill = () => {
        createForm('skills',{
            skill:'',
            collapsed:false,
            id:uniqid()
        })
    }
    //onRemove function
    function removeForm(e: { target: { closest: (arg0: string) => any; }; }) {
        const form = e.target.closest('.section-form')
        const {arrayName} = form.dataset 
        const array:'educations'|'experience'|'skills' = arrayName
        const section:any[] = sections[array]
        const {id} = form
        const collapsed = document.querySelectorAll('.collapsedForm')
        collapsed.forEach((form) => {
            form.setAttribute('style','display:block;')
            
    })
        setSections({
            ...sections, [arrayName]: section.filter((item) => item.id !== id),
           
        })
       
    }
     
   function toggleValue(e: { target:any},key: string | number){
    const sectionForm = e.target.closest('.section-form')
    const {id} = sectionForm
    const {arrayName} = sectionForm.dataset
    const array:'educations'|'experience'|'skills' = arrayName
    const section:any[] = sections[array]
  
    setSections({
        ...sections, [arrayName]:section.map((form) => {
            if(form.id === id){
                setPrevState(Object.assign({},form))
                if(form[key] === true){
                    const collapsed = document.querySelectorAll('.collapsedForm')
                    collapsed.forEach((form) => {
                        form.setAttribute('style','display:none;')
                    })
                }else{
                    const collapsed = document.querySelectorAll('.collapsedForm')
                    collapsed.forEach((form) => {
                        form.setAttribute('style','display:block;')
                })
            }
          
                form[key] = !form[key]
            }
            return form
        })
    })
}
const educations = sections.educations
const experience = sections.experience
const skills = sections.skills
const toggleCollapsed = (e: { target: { closest: (arg0: string) => any; }; }) =>{
     toggleValue(e, 'collapsed')
     
}

 return(
    <main className="flex h-[95%] w-[95%] bg-white text-black">
        <div className=" flex justify-center items-center bg-jetBlack text-xl w-[50%] h-5/5" id='form'> 
         
            <Contact onChange={handleContactInfoChange}
                name={personal.name}
                email={personal.email}
                number={personal.number}
                address={personal.address}
                next = {personal.next} /> 
             <AddEducationComponent 
            educations = {sections.educations}
            onChange = {handleSectionChange}
            createForm = {createEducationForm}
            toggleCollapse = {toggleCollapsed}
            onRemove = {removeForm}
            />    
            <ExperienceComponent
            experiences = {sections.experience}
            onChange = {handleSectionChange}
            createForm = {createExperienceForm}
            onRemove = {removeForm}
            toggleCollapse = {toggleCollapsed}
            />
            <AddSkills
            skills = {sections.skills}
            onChange = {handleSectionChange}
            createForm = {createSkill}
            onRemove = {removeForm}
            toggleCollapse={toggleCollapsed}
            />
            </div>
        <Resume personal={personal} educations = {educations} experience = {experience} skills = {skills}/>
       
    </main>
 )
}