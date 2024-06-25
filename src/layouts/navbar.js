import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom"
import Rectangle12 from "../assets/Rectangle12.svg"; 
import Dinamo2 from "../assets/dinamo2.svg"; 

const NavBarExample = () => {
    return (
        <>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3" style={{ zIndex: 1 }} expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="navbar-brand mx-auto"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNavDropdown" />
                    <Navbar.Collapse id="navbarNavDropdown">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" className="nav-link active yellow" aria-current="page">HOME</Nav.Link>

                            <NavDropdown title="O CLUBE" id="navbarDropdown1" className="nav-item dropdown">
                                <NavDropdown.Item href="#clube-content" className="dropdown-item">HISTÓRIA</NavDropdown.Item>
                                <NavDropdown.Item href="#valores" className="dropdown-item">VALORES</NavDropdown.Item>
                                <NavDropdown.Item href="#visaoMissao" className="dropdown-item">VISÃO E MISSÃO</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="MODALIDADES" id="navbarDropdown2" className="nav-item dropdown">
                                <NavDropdown.Item as={Link} to="/about" className="dropdown-item">FUTEBOL</NavDropdown.Item>
                                <NavDropdown.Item href="./Futsal.html" className="dropdown-item">FUTSAL</NavDropdown.Item>
                                <NavDropdown.Item href="./TenisMesa.html" className="dropdown-item">TÉNIS DE MESA</NavDropdown.Item>
                                <NavDropdown.Item href="./Atletismo.html" className="dropdown-item">ATLETISMO</NavDropdown.Item>
                                <NavDropdown.Item href="./Campismo.html" className="dropdown-item">CAMPISMO E MONTANHISMO</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="CALENDÁRIO" id="navbarDropdown3" className="nav-item dropdown">
                                <NavDropdown.Item href="./Calendario.html" className="dropdown-item">EVENTOS</NavDropdown.Item>
                                <NavDropdown.Item href="./CalendarioAtivities.html" className="dropdown-item">ATIVIDADES</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={Link} to="/Noticias" className="nav-link" aria-current="page">NOTICIAS</Nav.Link>
                            <Nav.Link href="./Galeria.html" className="nav-link">GALERIA</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img src={Rectangle12} className="float-left z-1 position-absolute" id="retangulo12" alt="Rectangle12" />
            <img src={Dinamo2} className="dinamo2 col-xl-0,1" id="dinamo" alt="dinamo2" />

            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
};

export default NavBarExample;