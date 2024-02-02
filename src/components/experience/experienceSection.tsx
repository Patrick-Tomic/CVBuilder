// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ExperienceInfoSection({props}:any){
    const {title, company, location, startDate, endDate} = props
    let dash
    
    if(startDate === '' || endDate === '' || company === ''){
        dash = <p id='hidden'>-</p>
    }else{
        dash = <p id="clear">-</p>
    }
    return(
        <div className="flex flex-col border-t-2 border-black">
            <div className="flex self-center text-xl font-bold">{title}{dash} {company}</div>
          
            <div>
                <div className="flex justify-around">
                    <p className="flex text-lg">{startDate}{dash}{endDate}</p>
                    <p className="font-bold text-xl">{location}</p>
                </div>
            </div>
        </div>
    )
}