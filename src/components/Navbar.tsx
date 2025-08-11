import { Link } from "react-router"
export default function Navbar(){
    return(
        <header>
                <Link to="/" className="site-logo">#VanLife</Link>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}