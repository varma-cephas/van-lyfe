import { useParams, Link } from "react-router"
import arrOfVans from "../server"


export default function VanDetail(){
    const param = useParams();
    console.log(param)
    const theVan = arrOfVans.map(van=>{
        if(van.id===param.id){
            return(
                <div className="van-detail" key={van.id}>
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            )
        }
    }).filter(item=>item!==undefined)
    console.log(theVan)
    return(
        <>
        <Link
                to=".."
                className="back-button"
            >&larr; <span>Back to all vans</span>
        </Link>
        {theVan}
        </>
    )
}