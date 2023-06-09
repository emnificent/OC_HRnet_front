import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className='header'>
        <Link to='/' className='header__app-name'>
          <h1>HRnet</h1>
        </Link>
        <menu className='header__links'>
          <li>
            <NavLink to='/' title='Home'
              className='header__links-item'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/employees' title='Employees'
              className='header__links-item'>
              Employees
            </NavLink>
          </li>
        </menu>
      </nav>
    </header>
  )
}

export default Header
