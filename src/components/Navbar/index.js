import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link style={Link} to="/">Home</Link>
    <Link style={Link} to="/about">About</Link>
    <Link style={Link} to="/contact">Contact</Link>
  </nav>
);

// const styles = {
//   nav: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: '50px',
//     backgroundColor: '#333',
//     color: '#fff',
//   },
//   link: {
//     color: '#fff',
//     textDecoration: 'none',
//     marginRight: '15px',
//   },
// };

export default Navbar;