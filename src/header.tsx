/* eslint-disable @typescript-eslint/no-explicit-any */
import tele from './assets/phone-call.png'
import home from './assets/house.png'
import mail from './assets/mail.png'

export default function Header({name, email, phone, address}:any){
    return(
        <header className="flex flex-col items-center bg-cyan-600 w-[100%] p-6">
             <h1 id='headerHeading' className="text-center text-3xl mt-5 border-b-4 border-b-black border-double w-fit">{name}</h1>
        <div className="text-black mt-7 flex w-4/5 justify-around">
            <div className='flex justify-between'>
                <img className='w-7' src={mail} alt="email" />
                <p className='text-xl'>{email}</p>
            </div>
            <div className='flex justify-between'>
                <img className='w-7' src={tele} alt="email" />
                <p className='text-xl'>{phone}</p>
            </div>
            <div className='flex justify-between'>
                <img className='w-7' src={home} alt="" />
                <p className='text-xl'>{address}</p>
            </div>    
        </div>
    </header>
    )
}