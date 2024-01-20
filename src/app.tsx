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
    <main className="flex w-4/5 bg-white text-black">
        <Contact onChange={handleContactInfoChange}
        name={value.name}
        email={value.email}
        number={value.number}
        address={value.address} />

        <Resume personal={value} />
    </main>
 )
}