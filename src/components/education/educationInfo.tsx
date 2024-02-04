/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
 
export default function EducationSection({props}:any){
     const {degree, name, location, start, end} = props
    let dash  
   
    if(start === '' || end === ''){
        dash = <p id='hidden'>-</p>
    }else{
        dash = <p id ='clear'>-</p>}
    return(
  
        <div className="flex flex-col"  >
            <div className="flex self-center text-xl font-bold border-double border-b-8 border-black">{degree}</div>
            <div className="flex justify-around p-5">
            <div className="flex flex-col"> 
            <p className="flex text-lg">{start}{dash}{end}</p>
            <p className="text-lg">{location}</p>
            </div>
            <p className="text-lg font-bold">{name}</p>
            </div>
        </div>
    )
}