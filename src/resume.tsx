export default function Resume(personal){
return (
    <>
    <header className="flex">
        <div className="text-black">
            <p>{personal.email}</p>
            <p>{personal.number}</p>
            <p>{personal.address}</p>
        </div>
        <h1>{personal.name}</h1>
    </header>

    </>
)
}