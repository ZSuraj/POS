import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { fetchAllCustomers } from '../../../actions/customer';
import { useDispatch } from 'react-redux';
import { Alert } from '../../Alert/Alert';


function CollapsibleExample() {

  const dispatch = useDispatch()

  const getAll = () => {
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{maxWidth: "none"}}>
        <Navbar.Brand>
          <Link to='/' className='navbar-link'>
            Tables
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {/* <Nav.Link>
              <Link to='/menu/starter' className='navbar-link nav-buttons'>
                Menu
              </Link>  
            </Nav.Link> */}
            <Nav.Link>
              <Link to='/orders' className='navbar-link nav-buttons'>
                Orders
              </Link>  
            </Nav.Link>
            <Nav.Link>
            <Link to='/customers' className='navbar-link nav-buttons' onClick={getAll}>
              Customers
            </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#search"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
            <Nav.Link href="#name">Example</Nav.Link>
            <Nav.Link eventKey={2} href="#avatar">A</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;