import Header from './components/header'
import DisplayEducationSection from './components/education/educationSection'
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Resume({personal, education}:any ){
return (
    <div className='w-[50%] bg-[#F5F5DC]'>
    <Header 
    name = {personal.name} 
    email ={personal.email} 
    phone= {personal.number} 
    address ={personal.address} 
    />
    <DisplayEducationSection 
    degree = {education.degree}
    name = {education.name}
    field = {education.field}
    location = {education.location}
    start = {education.start}
    end = {education.end}
    />
    </div>
)
}