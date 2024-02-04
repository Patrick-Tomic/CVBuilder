/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CollapsedForm(props: { form?: any; onClick?: any; hideForm?: any; title?: any; arrayName?: any, key: any }){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {onClick, arrayName} = props
    const form = props.form
    let title
    if(form.name){
        title = form.name
    }else if(form.title){
        title = form.title
    }else if(form.skill){
        title = form.skill
    }
    let secondary
    if(form.degree){
        secondary = form.degree}
    else if(form.company){
        secondary = form.company}
     else if(form.skill){
        secondary = ''
     }
    return (
        <button
        className = "collapsedForm section-form border-2 mb-5 border-gray-400 rounded-3xl w-[100%] h-20 bg-neutral-700 hover:bg-slate-600 text-white" id = {form.id}
        onClick = {(e) =>{
            onClick(e)
            document.querySelector('.createFormBtn')?.setAttribute('style','display:none;')
            document.querySelector('#Experience')?.setAttribute('style','display:none;')
        } }
        data-array-name = {arrayName}
        >
            <p className="collapsed-form-title text-2xl">{title} <br></br> {secondary} </p>
        </button>
    )
}