/* eslint-disable @typescript-eslint/no-explicit-any */
 
export default function Contact({onChange,name, email,number, address}:any){
 
    return (
        <div className="bg-white flex mt-5  flex-col items-center w-[55%] h-5/5 rounded-xl p-5">
            <h1>Personal Information</h1>
            <form className="flex p-5 flex-col" >
            <label htmlFor="name">Full Name:</label>
                <input className='text-black border-solid border-black border-2' type="text" value={name} name="name" data-key='name' onChange={onChange}/>
                <label htmlFor="">Email:</label>
                <input className='text-black border-solid border-black border-2' data-key = 'email' onChange={onChange} value={email} type="email" />
                <label htmlFor="">Phone Number:</label>
                <input className='text-black border-solid border-black border-2' value={number} onChange={onChange} data-key='number' type="tel" />
                <label htmlFor="">Address:</label>
                <input className='text-black border-solid border-black border-2' onChange={onChange} data-key='address' value={address} type="text"/>
            </form>
        </div>
    )
    }
 