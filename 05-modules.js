// http://exploringjs.com/es6/ch_modules.html

// Previous code to scope the different types locally so as not to have to namespace them with ReactBootstrap each time
//var ReactBootstrap = require('react-bootstrap');
//var Navbar = ReactBootstrap.Navbar,
//    Nav = ReactBootstrap.Nav,
//    NavItem = ReactBootstrap.NavItem,
//    MenuItem = ReactBootstrap.MenuItem,
//    NavDropdown = ReactBootstrap.NavDropdown;

// New code, the transpiler will take care of this
// (Note: Cannot run this, just run babel <filename> to see the transpiled version)
import ReactBootstrap, {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
[Navbar, Nav, NavItem, MenuItem, NavDropdown];