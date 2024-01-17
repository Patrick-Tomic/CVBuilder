// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import {Link} from 'react-router-dom'
export default function Start () {
  return (
        <main className="rounded p-12 m-10 w-2/5 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Resume Builder</h1>
            <div className="p-12">
                <p className="text-xl p-12 tracking-wide leading-loose">This Project is a CV builder constructed with React. This App will allow for the creation of resumes for free, unlike your average CV builder website. There will be a variety of ways to customize your CV and many of the features will be working with the idea that a developer will be using this site.</p>
            </div>
          <button><Link to='/'>Start</Link></button>
            <h2>Enjoy - P.E.T</h2>
        </main>
  )
}
