import React from 'react';
import { Navbar, Container} from 'react-bootstrap'




const Header = () => {
    return (
      <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">Manage Shelter Pets</Navbar.Brand>
         <img src={process.env.PUBLIC_URL + '/images/catdog.jpg'}/>
        </Container>
      </Navbar>
      </>
  
    )
}
 
    export default Header
   