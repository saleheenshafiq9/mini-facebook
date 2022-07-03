import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { AuthContext } from "../UIElements/Context/Auth-Context";
import Logo from '../../Assets/mini-fb.png'
import './Home.css'
import { useContext } from "react";

const Home = () => {
    const auth = useContext(AuthContext);
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
                        {auth.isLoggedIn && (
                            <Link to="/" id="NavLink" className="px-5">
                                <b>Feed</b>
                            </Link>
                        )}
                        {!auth.isLoggedIn && (
                            <Link to="/login" id="NavLink" className="px-5">
                                <b>Login</b>
                            </Link>
                        )}
                        {auth.isLoggedIn && (
                            <Link to="/users" id="NavLink" className="px-5">
                                <b>Users</b>
                            </Link>
                        )}
                        {auth.isLoggedIn && (
                            <button id="NavLink" className="btn btn-sm px-5" onClick={auth.logout}>
                                <b>Logout</b>
                            </button>
                        )}
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Home;