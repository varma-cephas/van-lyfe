import { useState } from "react";
import arrOfVans from "../../server";
import { Outlet, useParams, Link, NavLink } from "react-router";

export default function HostVansDetails(){
    const param = useParams();
    // console.log(param)
    const activeNavigationStyles = {
        "fontWeight": "bold",
        "textDecoration": "underline",
        "color": "red"
    }

    let vanDetailsObj = {

    }
    const theHostVan = arrOfVans.map(van=>{
        if(van.id===param.id){
            vanDetailsObj = {...van}
            return(
                <div className="flex gap-2 items-center my-5 mx-[20px] px-5 py-2 rounded-md" key={van.id}>
                    <img src={van.imageUrl} alt="host-van-img" className="w-[35%] rounded-md" />
                    <div>
                        <p className={`van-type ${van.type} selected`}>{van.type}</p>
                        <p className="font-bold text-xl">{van.name}</p>
                        <p>{van.price}/day</p>
                    </div>
                </div>
            )
        }
    }).filter(item=>item!==undefined)

    console.log(theHostVan)
    return(
       <>
        <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span>
        </Link>
        <h1 className="ml-[26px] text-3xl mt-10 font-bold">Van detail page</h1>
        {theHostVan}
        <nav className="host-van-detail-nav ml-[26px]">
            <NavLink end to="." style={({isActive})=>isActive?activeNavigationStyles:undefined}>About</NavLink>
            <NavLink to={`pricing`} style={({isActive})=>isActive?activeNavigationStyles:undefined}>Pricing</NavLink>
            <NavLink to={`photos`} style={({isActive})=>isActive?activeNavigationStyles:undefined}>Photos</NavLink>
        </nav>
        <Outlet context={{vanDetailsObj}}/>
       </>
    )
}