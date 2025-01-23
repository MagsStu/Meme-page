import MemyLogo from '../images/MEMY-logo.jpg';

export function Header() {
  return (
    <div className='header-box'>
      <img
        src={MemyLogo}
        alt='meme'
        style={{ width: '50px', padding: '10px' }}
      ></img>
      <h2>MEMELECTION</h2>
    </div>
  );
}
