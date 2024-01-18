// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { Link } from "react-router-dom"
export default function Start () {
  return (
  
         <main className=" rounded p-12 m-10 w-3/5 h-5/5 flex flex-col justify-center bg-[#343434] items-center">
            <h1 className="text-4xl font-bold text-white">Resume Builder</h1>
            <div className="p-12">
                <p className="text-3xl text-white p-12 tracking-wide leading-loose">This Project is a CV builder constructed with React. This App will allow for the creation of resumes for free, unlike your average CV builder website. There will be a variety of ways to customize your CV and many of the features will be working with the idea that a developer will be using this site.</p>
            </div>
            <h2 className=" text-3xl font-bold mb-5 text-white">Enjoy - P.E.T</h2>
      <Link to = '/contact'><button className="border-solid font-bold border-black border-2 p-2 w-32 h-16 text-2xl rounded-2xl bg-white hover:bg-hover">Start</button></Link>
        </main>   
  )
}
