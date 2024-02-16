import {Navbar,Nav,NavDropdown} from "react-bootstrap"
import { Link, link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
function Header(){
    const navigate = useNavigate()
    const user=JSON.parse(localStorage.getItem('user-info'));
    function logout(){
        localStorage.clear();
        navigate('/register');
    }
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
            {/* <Container> */}
                <Navbar.Brand href="#home">WallatMart</Navbar.Brand>
                <Nav className="me-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('user-info')?
                        <>
                            <Link to="/add">AddProducts</Link>
                            <Link to="/update">UpdateProducts</Link>
                        </>
                        :
                        <>
                            <Link to="/login">LogIn</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }
                    
                    
                </Nav>
                {
                localStorage.getItem('user-info')?
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                : null
                }
            {/* </Container> */}
            </Navbar>
        </div>
    )
}
export default Header