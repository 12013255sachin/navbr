import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/about' activeStyle>
            <b>Home</b>
          </NavLink>
          <NavLink to='/events' activeStyle>
            <b>Home1</b>
          </NavLink>
          <NavLink to='/annual' activeStyle>
            <b>Home2</b>
          </NavLink>


        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

/*{<NavLink to='/team' activeStyle>
  Teams
</NavLink>
<NavLink to='/blogs' activeStyle>
  Blogs
</NavLink>
<NavLink to='/sign-up' activeStyle>
  Sign Up
</NavLink>}
*/
