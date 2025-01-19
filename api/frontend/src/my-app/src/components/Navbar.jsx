
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', background: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
            <ul style={{display: 'flex', gap: '1rem', listStyle: 'none', margin: 0}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/class">Class</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
