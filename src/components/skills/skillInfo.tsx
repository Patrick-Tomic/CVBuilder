// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SkillsInfo({props}: any){
    const {skill,id} = props
    
    return(
        <div className="flex" id = {id}>
             <li className="font-bold p-5">{skill}</li>
        </div>
)
}