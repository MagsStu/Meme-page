import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='wrapper'>
        <li activeClassName='active'>
          <NavLink to='/' end>
            {' '}
            Regular
          </NavLink>
        </li>
        <li activeClassName='active'>
          <NavLink to='/hot'>Hot</NavLink>
        </li>
      </ul>
    </nav>
  );
}
