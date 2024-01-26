// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EducationSection(props:any){
    const {degree, name, location, start, end} = props
    let dash  
    if(start && end === ''){
        dash = <p id='hidden'>-</p>
    }else{
        dash = <p id ='clear'>-</p>}
    return(
  
        <div className="flex flex-col">
            <div className="flex"> {start}{dash}{end}</div>
            <div className="flex">{degree}</div>
            <div className="flex">{name}, {location}</div>
        </div>
    )
}