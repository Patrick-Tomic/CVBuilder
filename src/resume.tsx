import Header from './header'
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Resume({personal}:any){
return (
    <div className='w-[50%] bg-[#F5F5DC]'>
    <Header 
    name = {personal.name} 
    email ={personal.email} 
    phone= {personal.number} 
    address ={personal.address} 
    />
    </div>
)
}