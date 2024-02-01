/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import uniqid from "uniqid";
import Contact from "./components/firstPhase"
import AddEducationComponent from "./components/education/addEducationSection"
import { useState } from "react"
import Resume from "./resume"
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
         experience:[],
         skills:[]
    })
      
    //for onCancel 
      const [prevState, setPrevState] = useState(null)
         
      function handleSectionChange(e: { target: { dataset: { key: any; }; value: any; closest: (arg0: string) => any; }; }){
        const {key} = e.target.dataset
        
        const inputValue = e.target.value
        const form = e.target.closest('.section-form')
        const id = form.id
        const {arrayName} = form.dataset 
        const array:'educations' = arrayName
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

    function createForm(arrayName:'educations'|'experience'|'skills', object: { degree: string; name: string; location: string; start: string; end: string; hidden: boolean; collapsed: boolean; id: any; }){
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
    //onRemove function
    function removeForm(e: { target: { closest: (arg0: string) => any; }; }) {
        const form = e.target.closest('.section-form')
        const {arrayName} = form.dataset 
        const array:'educations' = arrayName
        const section:any[] = sections[array]
        const {id} = form
        setSections({
            ...sections, [arrayName]: section.filter((item) => item.id !== id),
        })
    }
    //onCancel function
    function cancelForm(e: { target: any; }){
        if(prevState === null){
            removeForm(e)
            return
        }
        const sectionForm = e.target.closest('section-form')
        const {id} = sectionForm
        const arrayName: 'educations'|'experience'|'skills' = sectionForm.dataset 
        const section:any[] = sections[arrayName]

        setSections({
            ...sections, [arrayName]:section.map((form) => {if(form.id === id) {
                form = prevState
                form.collapsed = true
            }
        return form})
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
                form[key] = !form[key]
                console.log(section)
                console.log('works')
            }
            return form
        })
    })
}
const educations = sections.educations

const toggleCollapsed = (e: { target: { closest: (arg0: string) => any; }; }) => toggleValue(e, 'collapsed')
const toggleHidden = (e: { target: { closest: (arg0: string) => any; }; }) => toggleValue(e,'hidden')
 return(
    <main className="flex h-[95%] w-[95%] bg-white text-black">
        <div className=" flex justify-center items-center bg-jetBlack text-xl w-[50%] h-5/5"> 
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
            onCancel = {cancelForm}
            onHidden = {toggleHidden}
            toggleCollapse = {toggleCollapsed}
            onRemove = {removeForm}
            />   
        </div>
        <Resume personal={personal} educations = {educations}/>
       
    </main>
 )
}