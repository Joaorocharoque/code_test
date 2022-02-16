import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  h1Style,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {

  return (
    <>
      <Nav>
      
      <h1 style={h1Style}>Code Test</h1>      
        <Bars />
        <NavMenu>
        <NavLink to='/' activestyle>
            Posts
          </NavLink>
        <NavLink to='/Comments' activestyle>
            Comments
          </NavLink>
          </NavMenu>
          <NavBtn>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;