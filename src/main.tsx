import {Route, Routes} from 'react-router-dom'
import Start from './start'
import Contact from './firstPhase'
export default function Main(){
    return(
         
   <Routes>
   <Route path = '/s' element = {<Start />}></Route>
   <Route path = '/contact' element= {<Contact />}></Route>
   </Routes>
  
    )
}