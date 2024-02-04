import InputSection from "../input"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SkillForm(props:{onChange: any, form: any, remove: any, save: any, }){
    const form = props.form
    const onChange = props.onChange
    return(
        <form className="section-form skillForm flex  justify-around flex-col bg-steel  mt-5 text-white  items-center h-[100%]  rounded-xl"key={form.id} id = {form.id}   onSubmit={(e) => e.preventDefault()}  data-array-name="skills">
            <InputSection
            value={form.skill}
            dataKey = 'skill'
            placeholder=""
            text="Add Skill:"
            onChange={onChange}
            type="text"
            />
                <div className="flex justify-around w-[60%] m-5">
            <button type="submit"
                    onClick={ (e) => {
                      if(form.skill===''){
                        return
                      }
                      props.save(e)
                      document.querySelector('#Skills')?.setAttribute('style','display:block;')   
                    }}
                     className="border-2 border-black bg-white text-black rounded w-fit p-1">Submit</button>
                     <button  className="border-2 border-black bg-white text-black rounded w-fit p-1 " type="button" onClick={(e) => {
                      props.remove(e)
                      document.querySelector('#Skills')?.setAttribute('style','display:block;')
                     }}>Remove</button>
                     </div>
        </form>
    )
}