import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Logo from '../../Assets/mini-fb.png'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar
                style={{
                backgroundColor: "#FFE19C",
                height: "80px",
                fontFamily: "finlandica",
                fontSize: "18px"
                }}
                className="px-5"
            >
                <Link to="/" id="NavLink"  className="mr-auto Brand">
                    <b>mini-fb</b>
                </Link>
                <Nav>
                    <NavItem
                        style={{
                        display: "contents",
                        }}
                    >
                        <Link to="/home" id="NavLink" className="px-5">
                            <b>Feed</b>
                        </Link>
                        <Link to="/login" id="NavLink" className="px-5">
                            <b>Login</b>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Home;