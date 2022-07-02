import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Logo from '../../Assets/mini-fb.png'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar
                style={{
                backgroundColor: "#E0FBFC",
                height: "80px",
                fontFamily: "finlandica",
                fontSize: "18px"
                }}
                className="px-5"
            >
                <Link to="/" id="NavLink"  className="mr-auto Brand">
                    <img src={Logo} alt="mini-fb" width="20px" height="20px" className="mx-2"/>
                    <b>mini-fb</b>
                </Link>
                <Nav>
                    <NavItem
                        style={{
                        display: "contents",
                        }}
                    >
                        <Link to="/" id="NavLink" className="px-5">
                            <b>Feed</b>
                        </Link>
                        <Link to="/login" id="NavLink" className="px-5">
                            <b>Login</b>
                        </Link>
                        <Link to="/users" id="NavLink" className="px-5">
                            <b>Users</b>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Home;