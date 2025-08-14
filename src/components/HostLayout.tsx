import { NavLink, Outlet } from "react-router";

export default function HostLayout(){
    const activeNavigationStyles = {
        "fontWeight": "bold",
        "textDecoration": "underline",
        "color": "red"
    }
    return(
        <>
            <nav className="host-nav">
                <NavLink end style={({isActive})=>isActive?activeNavigationStyles:undefined} to={`.`}>Admin</NavLink>
                <NavLink style={({isActive})=>isActive?activeNavigationStyles:undefined} to={`income`}>Income</NavLink>
                <NavLink style={({isActive})=>isActive?activeNavigationStyles:undefined} to={`vans`}>Vans</NavLink>
                <NavLink style={({isActive})=>isActive?activeNavigationStyles:undefined} to={`review`}>Review</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}