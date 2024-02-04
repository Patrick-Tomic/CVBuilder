import Header from './components/header'
import EducationSections from './components/education/educationSections'
import ExperienceSections from './components/experience/experienceSections'
import SkillsSection from './components/skills/skillSection'
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Resume({personal, educations, experience, skills}:any){ 
 
  return (
    <div className='w-[50%] border-l-2 border-l-black bg-[#F5F5DC]  overflow-auto' id='resume'>
   <Header 
    name = {personal.name} 
    email ={personal.email} 
    phone= {personal.number} 
    address ={personal.address} 
    />  
   <EducationSections
    educations = {educations}
    />     
    <ExperienceSections experience = {experience}/>
    <SkillsSection skills = {skills}/>
    </div>

)
}