import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={styles.nav}>
    <Link style={styles.link} to="/">Home</Link>
    <Link style={styles.link} to="/about">About</Link>
    <Link style={styles.link} to="/contact">Contact</Link>
  </nav>
);

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#333',
    color: '#fff',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '15px',
  },
};

export default Navbar;