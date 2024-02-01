import { MouseEventHandler } from "react";

export default function CreateForm(props:{onclick: MouseEventHandler<HTMLButtonElement> | undefined; text:string}){
    return(
        <button onClick={props.onclick }>
            {props.text}
        </button>
    )
}