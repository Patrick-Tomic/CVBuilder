/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Contact from "./components/firstPhase"
import EducationForm from "./components/education/secondPhase"
import AddEducationComponent from "./components/education/addEducationSection"
import { useState } from "react"
import Resume from "./resume"
export default function App(){
     
    const [education, setEducation] = useState( {
        degree:'',
        field:'',
        name: '',
        location: '',
        start: '',
        end: '',
        hidden:true,
        id: null
    })
    const [personal, setPersonal] = useState( {
        name:'',
        email: '',
        number: '',
        address: '',
        next:false
       })
            //Education Form var
            const educationForm = () => {
            const form =<EducationForm onChange = {handleEducationChange} degree={education.degree} field = {education.field} name = {education.name} location = {education.location} start = {education.start} end = {education.end} id = {education.id}/>
            const main = document.querySelector('main')
             
        }
            //onCancel function
            
            //onRemove function

    function handleEducationChange(e: { target: { dataset: { key: any }; value: any } }){
        const {key} = e.target.dataset
        setEducation({...education, [key]:e.target.value})
    }
    function handleContactInfoChange(e: { target: { dataset: { key: any }; value: any } }){
        const {key} = e.target.dataset
        if(key === 'next'){
            if(personal.name === ''|| personal.email === '' || personal.number === '' || personal.address === ''){
                return
            }
      
            setPersonal({...personal, [key]:true})
            setEducation({...education, hidden:false})
           
             
        }else{
            setPersonal({...personal, [key]:e.target.value})
        }
         
    }
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
            education = {education}
            onChange = {handleEducationChange}
            createForm = {educationForm}
            />
        </div>  

        <Resume personal={personal} education ={education}/>
    </main>
 )
}