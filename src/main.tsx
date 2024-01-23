import {Route, Routes} from 'react-router-dom'
import Start from './start'
 
import App from './App'
export default function Main(){
    return(
         
   <Routes>
   <Route path = '/' element = {<Start />}></Route>
   <Route path = '/contact' element= {<App />}></Route>
   </Routes>
  
    )
}