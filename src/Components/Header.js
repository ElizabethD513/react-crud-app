import React from 'react';



const Header = () => {
    return (
      <header>
        <h1>Shelter Pet Management Form</h1>
        <hr />
        <div className="links">
          <NavLink to="/" className="link" activeClassName="active" exact>
            Pet List
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active">
            Add Pet
          </NavLink>
        </div>
      </header>
    );
  };
  
  export default Header;