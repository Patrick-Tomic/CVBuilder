/* eslint-disable @typescript-eslint/no-explicit-any */

import { truncate } from "fs";

 
//* eslint-disable @typescript-eslint/no-explicit-any */
 
export default function Contact({next, onChange,name, email,number, address}:any){
 
    return (
        <div className="w-[75%] h-[80%] flex flex-col  ">
        <h1 className="self-center font-signika text-4xl">Personal Information</h1>
        <div className="bg-steel flex mt-5 text-white flex-col items-center h-[100%]  rounded-xl p-2">
            <form className="flex h-[90%] justify-around flex-col" >
                <div className="flex flex-col">
                <label htmlFor="name">Full Name:</label>
                <input className='text-black border-solid border-black border-2' type="text" value={name} name="name" data-key='name' required onChange={onChange}/>
                </div>
                <div className="flex flex-col"> 
                <label htmlFor="">Email:</label>
                <input className='text-black border-solid border-black border-2' data-key = 'email' onChange={onChange} required value={email} type="email" />
                
                </div>
                <div className="flex flex-col">
                <label htmlFor="">Phone Number:</label>
                <input className='text-black border-solid border-black border-2' value={number} onChange={onChange} required data-key='number' type="tel" />
                </div>
                <div className="flex flex-col"> 
                <label htmlFor="">Address:</label>
                <input className='text-black border-solid border-black border-2' onChange={onChange} data-key='address' required value={address} type="text"/>
                </div>
                
            </form>
            <button type='submit' className="border-solid border-2 hover:bg-hover text-black bg-white border-black w-2/5 self-center mt-5"  onClick={next(true)}>Next</button>
        </div>
        </div>
    )
    }
 