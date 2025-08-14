import { NavLink, Link } from "react-router"
export default function Navbar(){
    const activeNavigationStyles = {
        "fontWeight": "bold",
       "textDecoration": "underline",
       "color": "red"
    }
    return(
        <>
        <header>
            <Link to="/" className="site-logo">#VanLife</Link>
            <nav>
                <NavLink style={({isActive})=>isActive?activeNavigationStyles:undefined}  to="/about">About</NavLink>
                <NavLink style={({isActive})=>isActive?activeNavigationStyles:undefined} to="/vans">Vans</NavLink>
                <NavLink style={({isActive})=>isActive?activeNavigationStyles:undefined} to="/admin">Admin</NavLink>
            </nav>
        </header>
        </>
    )
}