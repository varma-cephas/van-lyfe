import { NavLink, Outlet } from "react-router";

export default function HostVanDetailsLayout(){
        const activeNavigationStyles = {
        "fontWeight": "bold",
        "textDecoration": "underline",
        "color": "red"
    }
    return(
        <>
            <nav className="host-van-detail-nav ml-[26px]">
                <NavLink end to={`info`} style={({isActive})=>isActive?activeNavigationStyles:undefined}>About</NavLink>
                <NavLink to={`pricing`} style={({isActive})=>isActive?activeNavigationStyles:undefined}>Pricing</NavLink>
                <NavLink to={`photos`} style={({isActive})=>isActive?activeNavigationStyles:undefined}>Photos</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}