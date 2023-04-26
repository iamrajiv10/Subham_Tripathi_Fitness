import './navbar.css';
import {Link} from 'react-router-dom'


function Navibar(){
    return(
        <div className='navbar' >
            <Link to="/runner"><h1>S<span>T</span>F</h1></Link>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/details">Form</Link> </li>
            </ul>
        </div>
    )
}

export default Navibar;