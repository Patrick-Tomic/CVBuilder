/* eslint-disable @typescript-eslint/no-explicit-any */
import Contact from "./firstPhase"
import { useState } from "react"
import Resume from "./resume"
export default function App(){
    const [submitEducation, setSubmit] = useState(false)
    const [nextPersonal,setNext] = useState(false)
    const [education, setEducation] = useState( {
        degree:'',
        field:'',
        school: '',
        city: '',
        country: '',
        start: '',
        end: ''
    })
    const [personal, setPersonal] = useState( {
        name:'',
        email: '',
        number: '',
        address: ''
       })
    function handleEducationChange(e){
        const {key} = e.target.dataset
        setEducation({...education, [key]:e.target.value})
    }
    function handleContactInfoChange(e: { target: { dataset: { key: any }; value: any } }){
        const {key} = e.target.dataset
        setPersonal({...personal, [key]:e.target.value})
       
    }
    
 return(
    <main className="flex h-[95%] w-[95%] bg-white text-black">
         <div className=" flex justify-center items-center bg-jetBlack text-xl w-[50%] h-5/5"> 
      <Contact next={setNext} onChange={handleContactInfoChange}
        name={personal.name}
        email={personal.email}
        number={personal.number}
        address={personal.address} />
        </div>
        <Resume personal={personal} />
    </main>
 )
}