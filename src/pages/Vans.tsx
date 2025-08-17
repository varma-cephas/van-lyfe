import { Link, useSearchParams } from "react-router"
import arrOfVans from "../server"

export default function Vans(){
    const [searchParam, setSearchParam] = useSearchParams();
    const typeFilter = searchParam.get("type");
    console.log(searchParam.toString())
    const displayedVans = typeFilter ? arrOfVans.filter(van=>van.type===typeFilter):arrOfVans
    const arrOfVansElements = displayedVans.map(van=>(
        <div key={van.id} className="van-tile">
        <Link to={van.id} state={{filter: searchParam !== undefined? `?${searchParam.toString()}`:""}}>
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
        </div> 
    ))

    function handleSearchParam(key:string,val:string|null){
        setSearchParam(prevParam=>{
            if(val===null){
                prevParam.delete(key)
            }else{
                prevParam.set(key, val)
            }
            return prevParam
        })
    }
    return(
        <>
            <div className="van-list-container">
                <h1>Explore our Vans</h1>
                <div className="flex gap-2">
                    {/* <Link className="van-type clear-filters ml-2" to={`.`}>All</Link>
                    <Link className="van-type luxury" to={`?type=luxury`}>Luxury</Link>
                    <Link className="van-type rugged" to={`?type=rugged`}>Rugged</Link>
                    <Link className="van-type simple" to={`?type=simple`}>Simple</Link> */}
                    <button className="van-type simple" onClick={()=>handleSearchParam("type","simple")}>Simple</button>
                    <button className="van-type luxury" onClick={()=>handleSearchParam("type","luxury")}>Luxury</button>
                    <button className="van-type rugged" onClick={()=>handleSearchParam("type","rugged")}>Rugged</button>
                    {typeFilter?<button className="van-type clear-filters" onClick={()=>handleSearchParam("type",null)}>Clear</button>:null}
                </div>
                <div className="van-list">
                    {arrOfVansElements}
                </div>
            </div>
        </>
    )
}

