/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CollapsedForm(props: { form?: any; onClick?: any; hideForm?: any; title?: any; arrayName?: any }){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {onClick, hideForm, title, arrayName} = props
    const {isHidden, id} = props.form
    return (
        <button
        className = "collapsedForm sectionForm" id = {id}
        onClick = {onClick}
        data-array-name = {arrayName}
        >
            <p className="collapsed-form-title">{title}</p>
            
        </button>
    )
}