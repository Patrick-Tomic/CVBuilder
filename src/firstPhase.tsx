
 
export default function Contact({onChange,name, email,number, address}){
 
    return (
        <div className="flex  flex-col items-center bg-jetBlack text-xl text-white w-3/5 h-5/5">
            <label htmlFor="name">Full Name:</label>
                <input className='text-black' type="text" value={name} data-key='name' onChange={onChange}/>
                <label htmlFor="">Email:</label>
                <input className='text-black' data-key = 'email' onChange={onChange} value={email} type="email" />
                <label htmlFor="">Phone Number:</label>
                <input className='text-black' value={number} onChange={onChange} data-key='number' type="tel" />
                <label htmlFor="">Address:</label>
                <input className='text-black' onChange={onChange} data-key='address' value={address} type="text" />
            
        </div>
    )
    }
 