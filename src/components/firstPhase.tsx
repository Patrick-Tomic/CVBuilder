/* eslint-disable @typescript-eslint/no-explicit-any */
import InputSection from "./input" 

 
//* eslint-disable @typescript-eslint/no-explicit-any */
 
export default function Contact({onChange,name, email,number, address,next}:any){
 
    return (
        <div id = 'personal' className="w-[75%] h-[80%] flex flex-col  ">
        <h1 className="self-center font-signika text-4xl">Personal Information</h1>
        <div className="bg-steel flex mt-5 text-white flex-col items-center h-[100%]  rounded-xl p-2">
            <form onSubmit={(e) => e.preventDefault()}  className="flex h-[90%] justify-around flex-col" >
              <InputSection
              type = 'text'
              placeholder = 'John Eric Doo'
              value = {name}
              text = 'Full Name:'
              onChange = {onChange}
              dataKey='name'
              />
              <InputSection
              type = 'email'
              placeholder ='John32Doo@aol.com'
              value = {email}
              text = 'Email Address:'
              onChange = {onChange}
              dataKey = 'email'
              />
              <InputSection
              type = 'tel'
              placeholder = '332-521-9836'
              value = {number}
              text = 'Phone Number'   
              onChange = {onChange}
              dataKey = 'number'
              />
              <InputSection 
              type = 'text'
              placeholder = 'Elijay, GA'
              value = {address}
              text = 'Residence:'
              onChange = {onChange}
              dataKey = 'address'
              />
              <button onClick={() =>{
                document.querySelector('#personal')?.setAttribute('id','hidden')
                onChange
              }}  className="border-solid border-2 hover:bg-hover text-black bg-white border-black w-2/5 self-center mt-5" value={next} data-key='next' >Next</button>
            </form>
        </div>
        </div>
    )
    }
 