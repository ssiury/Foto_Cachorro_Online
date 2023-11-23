
import { Link, Outlet } from 'react-router-dom'

const Navbarinitial = () => {
    return (
            <div>
                <nav id="navbar">
                    <h2>
                        <Link to="/">Home</Link> 
                    </h2>
                    <h2>
                        <Link to="/services">Services</Link>
                    </h2>
                    <h2>
                        <Link to="/troll">Troll</Link>
                    </h2>
                    <h2>
                        <Link to="/macaco">Macaco</Link>
                    </h2>
                </nav>
                <h2>Hermes</h2>
                <Outlet/>
            </div>
    )
};

export default Navbarinitial