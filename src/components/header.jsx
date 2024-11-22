import { Link, NavLink } from 'react-router-dom';

const Header = () => (
<header>
    <h1>Shane Baird </h1>
    <nav>
        <NavLink to="/" activeClassName="active">About Me</NavLink>
        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
    </nav>
</header>
);
export default Header;

