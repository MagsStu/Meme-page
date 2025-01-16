import MemyLogo from '../images/MEMY-logo.jpg';

export function Header() {
  return (
    <div>
      <img
        src={MemyLogo}
        alt='meme'
        style={{ width: '50px', padding: '10px' }}
      ></img>
    </div>
  );
}
