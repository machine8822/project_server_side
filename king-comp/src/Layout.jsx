import {Outlet, Link} from "react-router-dom";
import './Layout.css';
import Header from './components/Header';
import {useState} from "react";


function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
        <Header />
            <nav className="main-nav">
                <button onClick={toggleMenu}>...</button>
                <ul className={menuOpen?"":"hide-small"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Store</Link>
                    </li>
                    <li>
                        <Link to="/Equipment">Equipment</Link>
                    </li>
                    <li>
                        <Link to="/Plants">Plants</Link>
                    </li>
                    <li>
                        <Link to="/Checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;