
import { Link } from 'react-router-dom'
import './Navbarinitial.css'

const Navbarinitial = () => {
    return (
            <div className='menu'>
                <nav id="navbar">
                    <h2>
                        <Link to="/" className='item'>Home</Link> 
                    </h2>
                    {/* <h2>
                        <Link to="/services" className='item'>Services</Link>
                    </h2>*/}
                    <h2>
                        <Link to="/troll" className='item'>Troll</Link>
                    </h2>
                    {/*<h2>
                        <Link to="/macaco" className='item'>Macaco</Link>
                    </h2>*/}
                </nav>
                <div className='titulo'>
                    <h2>HERMES</h2>
                </div>
            </div>
    )
};

export default Navbarinitial