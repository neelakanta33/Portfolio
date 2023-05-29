import {Link} from 'react-router-dom'
import '../styles/navbar.css'
const Navbar = () => {
    return ( 
        <section className="navbar">
            

<div className="nav">
<div className="nav1">
<div className="image">
                <img src={'images/profile'} alt="" />
            
            </div>
            <div className="info">
            <h1>Neelakanta A</h1>
                <p>Front End Developer</p>
            </div>
    <div className="links">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
    </div>
</div>
</div>
        </section>
     );
}
 
export default Navbar;