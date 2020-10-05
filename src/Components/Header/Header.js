import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import '../Home/Home.css'

const Header = () => {
    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo
    return (
        <div>
            <Navbar bg="transparent" variant="light">
                <Navbar.Brand>
                    <NavLink to='/home'>
                        <img className="ml-4" width="200px" src={logo} alt="" />
                    </NavLink>
                </Navbar.Brand>
                <Nav className="ml-auto justify-content-between font-weight-bold">
                    <NavLink activeClassName="tomato" className="custom-menu" to='/home'>Home</NavLink>
                    <NavLink activeClassName="tomato" className="custom-menu" to='/donation'>Donation</NavLink>
                    <NavLink activeClassName="tomato" className="custom-menu" to='/socialWork'>Events</NavLink>
                    <NavLink activeClassName="tomato" className="mr-5 custom-menu" to='/blogs'>Blogs</NavLink>
                </Nav>
                {
                    loggedInUser.email
                        ?
                        <div style={{ backgroundColor: "#b2ebf2" }} className="rounded-pill">
                            <Nav.Link className="mr-5 font-weight-bold text-dark" >
                                <img height="30px"
                                    style={{ borderRadius: "50%", marginRight: "15px" }} width="30px"
                                    src={loggedInUser.photo} alt="" />
                                {loggedInUser.name}
                            </Nav.Link>
                        </div>
                        :
                        <Form inline>
                            <Link to="/socialWork">
                                <Button className="mr-2 pl-4 pr-4" variant="primary">Register</Button>
                            </Link>
                            <Link to='/admin'>
                                <Button className="mr-5 pl-4 pr-4" variant="secondary">Admin</Button>
                            </Link>
                        </Form>
                }
            </Navbar>
        </div >
    );
};

export default Header;