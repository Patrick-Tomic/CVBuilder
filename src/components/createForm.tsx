import { MouseEventHandler } from "react";

export default function CreateForm(props:{onclick: MouseEventHandler<HTMLButtonElement> | undefined; text:string}){
    return(
        <button id='hidden' className="createFormBtn border-2 border-black hover:bg-hover w-fit self-center p-2 rounded-2xl font-bold" onClick={props.onclick }>
            {props.text}
        </button>
    )
}