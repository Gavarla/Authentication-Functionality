import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/">
      <li className="nav-link">Home</li>
    </Link>
    <Link to="/about">
      <li className="nav-link">About</li>
    </Link>
  </nav>
)

export default Header
