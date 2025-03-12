import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                <li><Link to="/dashboards">Dashboards</Link></li>
                <li><Link to="/writing">Writing</Link></li>
                <li><Link to="/coding">Coding</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
