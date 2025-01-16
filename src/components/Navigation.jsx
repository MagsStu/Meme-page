import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='wrapper'>
        <li>
          <NavLink to='/' end>
            {' '}
            Regular
          </NavLink>
        </li>
        <li>
          <NavLink to='/hot'>Hot</NavLink>
        </li>
      </ul>
    </nav>
  );
}
