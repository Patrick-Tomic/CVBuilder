import {Route, Routes} from 'react-router-dom'
import Start from './components/education/start'
 
import App from './App'
export default function Main(){
    return(
         
   <Routes>
   <Route path = '/' element = {<Start />}></Route>
   <Route path = '/app' element= {<App />}></Route>
   </Routes>
  
    )
}