 
 
export default function InputSection(props){
    return(
    <div className="flex flex-col">
    <label htmlFor={props.value}>{props.text}</label>
    <input className='text-black border-solid border-black border-2' type={props.type} placeholder={props.placeholder} value={props.value} name={props.dataKey} data-key={props.dataKey} required onChange={props.onChange}/>
    </div>
    )
}