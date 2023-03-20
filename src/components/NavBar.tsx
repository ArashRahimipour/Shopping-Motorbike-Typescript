import { Container, Button, Nav, Navbar as Navbars} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {BsFillCreditCardFill} from "react-icons/bs"
import { useShoppingCart } from '../context/ShoppingCartContex'

export function NavBar() {
  const {openCart, cartQuantity } = useShoppingCart()
  return(
    <Navbars sticky="top" className="bg-white shadow-lg mb-3" > 
      <Container>
            <Nav className='me-auto'>
                <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
            <Button 
                onClick={openCart}
                style={{ width: '3rem', height: '3rem', position: 'relative' }}
                variant='outline-primary'
                className='rounded-circle'
            >
          <BsFillCreditCardFill/>
          <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
                style={{ 
                    color: 'white', 
                    width:'1.5rem', 
                    height: '1.5rem', 
                    position: 'absolute', 
                    bottom: 0, 
                    right: 0,
                    transform: 'translate(25%,25%)'
                }}
            >
                {cartQuantity}
          </div>
            
            </Button>
            )}
        </Container>
      
    </Navbars>
  )
}

export default NavBar