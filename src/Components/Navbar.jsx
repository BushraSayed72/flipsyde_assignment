import "../App.css"
import {Link} from 'react-router-dom'

const Navbar =() => {
  return (
    <div className='top'>
    <Link className="flipsyde"> FlipSyde</Link>

    <div className='header'>
        <Link  className="header_link" to= {"/"}>Home </Link>
        <Link className="header_link" to= {"/about"}>About us</Link>
        </div>

    </div>
  )
}
export default Navbar
