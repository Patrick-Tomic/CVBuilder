// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { Link } from "react-router-dom"
export default function Start () {
  return (
  
         <main className=" rounded p-12 m-12 w-3/5 h-5/5 flex flex-col justify-center bg-[#343434] items-center">
            <h1 className="text-4xl font-bold text-white">Resume Builder</h1>
            <div className="p-12">
                <p className="text-3xl text-white p-12 tracking-wide leading-loose">This Project is a CV builder constructed with React. I explored syntax of Tailwind CSS & the connection of components with React.js.<br></br> Learned alot from this project, I want to in the future add some API to make the User experience faster and easier when filling out fields, but I will need to explore Node.js first and mongoDB. but the project is being put to rest for now.</p>
            </div>
            <h2 className=" text-3xl font-bold mb-5 text-white">Enjoy - P.E.T</h2>
            <div className="flex justify-around w-72">
      <Link to = '/app'><button className="border-solid font-bold border-black border-2 p-2 w-32 h-16 text-2xl rounded-2xl bg-white hover:bg-hover">Start</button></Link>
      <a className="mt-3" href='https://github.com/Patrick-Tomic/CVBuilder'><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5145 0C7.82942 0 0 8.0208 0 17.9436C0 25.8755 5.01658 32.5896 11.9759 34.9659C12.846 35.1446 13.1647 34.5799 13.1647 34.1048C13.1647 33.6888 13.136 32.2629 13.136 30.7773C8.26393 31.847 7.24936 28.6383 7.24936 28.6383C6.46638 26.5587 5.30626 26.0242 5.30626 26.0242C3.71162 24.925 5.42241 24.925 5.42241 24.925C7.19128 25.0439 8.11946 26.7669 8.11946 26.7669C9.68505 29.4998 12.2079 28.7276 13.2228 28.2522C13.3676 27.0935 13.8319 26.2915 14.3248 25.8459C10.439 25.4299 6.35059 23.8852 6.35059 16.9928C6.35059 15.0321 7.04609 13.4279 8.14814 12.1803C7.97426 11.7348 7.36516 9.89256 8.32237 7.4269C8.32237 7.4269 9.80121 6.95148 13.1357 9.26876C14.5633 8.87599 16.0356 8.67618 17.5145 8.67449C18.9933 8.67449 20.5008 8.88267 21.8929 9.26876C25.2277 6.95148 26.7066 7.4269 26.7066 7.4269C27.6638 9.89256 27.0543 11.7348 26.8805 12.1803C28.0116 13.4279 28.6784 15.0321 28.6784 16.9928C28.6784 23.8852 24.59 25.4001 20.6751 25.8459C21.3132 26.4103 21.8639 27.4796 21.8639 29.1731C21.8639 31.5793 21.8352 33.5105 21.8352 34.1044C21.8352 34.5799 22.1543 35.1446 23.024 34.9663C29.9833 32.5892 34.9999 25.8755 34.9999 17.9436C35.0286 8.0208 27.1705 0 17.5145 0Z" fill="#010101"/>
</svg>
</a>
            </div>
        </main>   
  )
}
