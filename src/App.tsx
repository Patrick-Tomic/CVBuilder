/* eslint-disable @typescript-eslint/no-explicit-any */
import Contact from "./firstPhase"
import { useState } from "react"
import Resume from "./resume"
export default function App(){
    const [submitEducation, setSubmit] = useState(false)
  
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
        address: '',
        next:false
       })
    function handleEducationChange(e){
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
        
        }else{
            setPersonal({...personal, [key]:e.target.value})
        }   
    }
let contactComponent =   <div className=" flex justify-center items-center bg-jetBlack text-xl w-[50%] h-5/5"> 
<Contact onChange={handleContactInfoChange}
  name={personal.name}
  email={personal.email}
  number={personal.number}
  address={personal.address}
  next = {personal.next} />
  </div>
  if(personal.next === true){
    contactComponent = <div className="hidden flex justify-center items-center bg-jetBlack text-xl w-[50%] h-5/5"> 
    <Contact onChange={handleContactInfoChange}
      name={personal.name}
      email={personal.email}
      number={personal.number}
      address={personal.address}
      next = {personal.next} />
      </div>
  }
 return(
    <main className="flex h-[95%] w-[95%] bg-white text-black">
        {contactComponent}
        <Resume personal={personal} />
    </main>
 )
}