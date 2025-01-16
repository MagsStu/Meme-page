import React from 'react';
import { Link } from 'react-router-dom';
import memyImg from '../images/MEMY.jpg';

export function ErrorPage() {
  return (
    <div className='error-box'>
      <h1>404 ERROR PAGE</h1>
      <Link to='/hot'>
        <button class='return-btn'>Go back</button>
      </Link>
      <img src={memyImg} alt='meme' style={{ width: '500px' }}></img>
    </div>
  );
}
