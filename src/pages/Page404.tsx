import { Link } from "react-router"
export default function Page404(){
    return(
        <>
            <div className="text-center m-10">
                <h1 className="text-4xl">You have reached the 404 page</h1>
                <div className="border bg-[#161616] text-white my-2 w-50 mx-auto py-2 rounded-md">
                    <Link to="/" className="">Return to home</Link>
                </div>
            </div>
        </>
    )
}