/* eslint-disable @typescript-eslint/no-explicit-any */
//* eslint-disable @typescript-eslint/no-explicit-any */
export default function EducationForm({onChange, degree, field,school, city, country, start,end}:any){
    return(
        <div  className="w-[75%] h-[80%] flex flex-col  ">
            <h1 className="self-center font-signika text-4xl">Education Information</h1>
            <div className="bg-steel flex mt-5 text-white flex-col items-center h-[100%]  rounded-xl p-2">
                <form className="flex h-[90%] justify-around flex-col" action="">
                    <div  className="flex flex-col">
                    <label>Degree Type</label>
                    <input className='text-black border-solid border-black border-2' type="text" value={degree} name='degree' data-key='degree' required onChange={onChange}/>
                    </div>
                    <div  className="flex flex-col">
                    <label>Field of Study</label>
                    <input className='text-black border-solid border-black border-2' type="text" value={field} name='field' data-key='field' required onChange={onChange}/>
                    </div>
                    <div  className="flex flex-col">
                    <label>School</label>
                    <input className='text-black border-solid border-black border-2' type="text" value={school} name='school' data-key='school' required onChange={onChange}/>
                    </div>
                    <div  className="flex flex-col">
                    <label>City</label>
                    <input className='text-black border-solid border-black border-2' type="text" value={city} name='city' data-key='city' required onChange={onChange}/>
                    </div>
                    <div  className="flex flex-col">
                    <label>Country</label>
                    <input className='text-black border-solid border-black border-2' type="text" value={country} name='country' data-key='country' required onChange={onChange}/>
                    </div>
                    <div  className="flex flex-col">
                    <label>Start Date</label>
                    <input className='text-black border-solid border-black border-2' type="date" value={start} name='start' data-key='start' required onChange={onChange}/>
                    </div>
                    <div  className="flex flex-col">
                    <label>End Date</label>
                    <input className='text-black border-solid border-black border-2' type="date" value={end} name='end' data-key='end' required onChange={onChange}/>
                    </div>
                    <button type="submit">Save</button>
            </form>
            
            </div>
        </div>

    )

}