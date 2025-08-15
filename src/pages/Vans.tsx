import { Link, useSearchParams } from "react-router"
import arrOfVans from "../server"

export default function Vans(){
    const [searchParam, useSearchParam] = useSearchParams();
    const typeFilter = searchParam.get("type");
    console.log(typeFilter)
    const arrOfVansElements = arrOfVans.map(van=>(
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div> 
    ))
    return(
        <>
            <div className="van-list-container">
                <h1>Explore our Vans</h1>
                <div className="van-list">
                    {arrOfVansElements}
                </div>
            </div>
        </>
    )
}

