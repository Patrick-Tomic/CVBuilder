 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CreateForm(props:{onclick:any; text:string}){
    return(
        <button id={props.text} className="createFormBtn border-2 border-black hover:bg-hover w-fit self-center p-2 rounded-2xl font-bold" onClick={(e) => {
            props.onclick(e)
            const collapsed = document.querySelectorAll('.collapsedForm')
            collapsed.forEach((form) => {
                form.setAttribute('style','display:none;')
            })
            document.querySelector(`#${props.text}`)?.setAttribute('style','display:none;')
        } }>
            {props.text}
        </button>
    )
}