export default function ExperienceInfoSection({props}:any){
    const {title, company, location, startDate, endDate} = props
    let dash
    if(startDate === '' || endDate === ''){
        dash = <p id='hidden'>-</p>
    }else{
        dash = <p id="clear">-</p>
    }
}