import MemyLogo from '../images/MEMY-logo.jpg';

export function Header() {
  return (
    <div className='header-box'>
      <img src={MemyLogo} alt='meme' className='meme-logo'></img>
      <h2>MEMELECTION</h2>
    </div>
  );
}
