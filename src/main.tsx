import {Route, Routes} from 'react-router-dom'
import Start from './start'
 
import App from './app'
export default function Main(){
    return(
         
   <Routes>
   <Route path = '/s' element = {<Start />}></Route>
   <Route path = '/contact' element= {<App />}></Route>
   </Routes>
  
    )
}