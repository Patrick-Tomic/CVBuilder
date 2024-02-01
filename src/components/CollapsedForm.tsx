/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CollapsedForm(props: { form?: any; onClick?: any; hideForm?: any; title?: any; arrayName?: any, key: any }){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {onClick, title, arrayName} = props
    const form = props.form
      
    return (
        <button
        className = "collapsedForm section-form border-2 border-gray-400 rounded-3xl w-[110%] bg-neutral-700 hover:bg-slate-600 text-white" id = {form.id}
        onClick = {onClick }
        data-array-name = {arrayName}
        >
            <p className="collapsed-form-title text-3xl">{title},<br></br> {form.degree} </p>
        </button>
    )
}