import {NavLink} from 'react-router-dom'
function Navbar () {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand">Navbar</span>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to='/about'>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to='/album'>Album</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>)
}

export {Navbar}