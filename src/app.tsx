/* eslint-disable @typescript-eslint/no-explicit-any */
import Contact from "./firstPhase"
import { useState } from "react"
import Resume from "./resume"
export default function App(){
    const [value, setValue] = useState( {
        name:'',
        email: '',
        number: '',
        address: ''
       })
    function handleContactInfoChange(e: { target: { dataset: { key: any }; value: any } }){
        const {key} = e.target.dataset
        setValue({...value, [key]:e.target.value})
    }

 return(
    <main className="flex h-[95%] w-[95%] bg-white text-black">
         <div className="flex  flex-col items-center bg-jetBlack text-xl w-[50%] h-5/5"> 
        <Contact onChange={handleContactInfoChange}
        name={value.name}
        email={value.email}
        number={value.number}
        address={value.address} />
        </div>
        <Resume personal={value} />
    </main>
 )
}