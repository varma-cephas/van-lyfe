import { Link } from "react-router"
import arrOfVans from "../../server"

export default function HostVans(){
    const arrOfHostVans = arrOfVans.map(van=>{
        if(van.hostId === "123"){
         return (
           <Link to={van.id} key={van.id} >
            <div className="flex gap-2 items-center my-5 border mx-[20px] px-5 py-2 rounded-md">
                <img src={van.imageUrl} alt="host-van-img" className="w-[15%] rounded-md" />
                <div>
                    <p className="font-bold text-xl">{van.name}</p>
                    <p>{van.price}/day</p>
                </div>
            </div>
           </Link>
         )
        }
}).filter(item=>item!==undefined)

    console.log(arrOfHostVans)
    return(
        <>
            <section className="mt-5 mb-20">
                <h1 className="my-[5px] mx-[20px] text-md text-3xl font-bold">Host Vans</h1>
                {arrOfHostVans}
            </section>
        </>
    )
}