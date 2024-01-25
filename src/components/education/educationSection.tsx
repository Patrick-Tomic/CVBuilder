// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DisplayEducationSection({degree, field, name, location, start, end}){
   
    return(
        <div className="flex flex-col">
            <div className="flex"> {start} - {end}</div>
            <div className="flex">{degree} of {field}</div>
            <div className="flex">{name}, {location}</div>
        </div>
    )
}