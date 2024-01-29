import Header from './components/header'
import EducationSection from './components/education/educationInfo'
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Resume({personal, sections}:any ){
return (
    <div className='w-[50%] bg-[#F5F5DC]'>
   <Header 
    name = {personal.name} 
    email ={personal.email} 
    phone= {personal.number} 
    address ={personal.address} 
    />  
     <EducationSection 
  educations = {sections.education}
    />    
    </div>
)
}