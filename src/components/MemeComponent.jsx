import React from 'react';
import '../App.css';

export function MemeComponent({ memy, setMemes, filter }) {
  const addHeart = (id) => {
    setMemes(
      memy.map((mem) =>
        mem.id === id ? { ...mem, upvote: mem.upvote + 1 } : mem
      )
    );
  };

  const brokenHeart = (id) => {
    setMemes(
      memy.map((mem) =>
        mem.id === id ? { ...mem, downvote: mem.downvote + 1 } : mem
      )
    );
  };

  // Using conditional ternary operator
  const splitMemes = memy.filter((mem) => {
    const netVotes = mem.upvote - mem.downvote;
    return filter === 'hot' ? netVotes > 7 : netVotes <= 7;
  });

  return (
    <div className='meme-box'>
      <h1>
        {filter === 'regular'
          ? 'Check out our Memes!'
          : 'Check out our hottest memes!'}
      </h1>
      <p className='more-info'>
        {filter === 'regular'
          ? 'Vote for your favourite meme and move it into the "Hot Meme" category!'
          : 'Vote for the memes you like to give them a star or break their heart to push them back into the "Regular" category.'}
      </p>
      <div className='mem-grid'>
        {splitMemes.map((mem) => (
          <div className='mem-cont' key={mem.title}>
            <h2>
              {mem.upvote - mem.downvote >= 15
                ? mem.title + '\u2B50'
                : mem.title}
            </h2>
            <img src={mem.img} alt={mem.alt} />
            <div className='voting-num'>
              <p>Hearts: {mem.upvote}</p>
              <button
                className='vote-btn'
                onClick={addHeart.bind(null, mem.title)}
              >
                &#128150;
              </button>
              <p>Broken: {mem.downvote}</p>
              <button
                className='vote-btn'
                onClick={brokenHeart.bind(null, mem.title)}
              >
                &#128148;
              </button>
            </div>
            <p>
              Suma:{' '}
              {mem.upvote - mem.downvote <= 2
                ? mem.upvote - mem.downvote + ' \u2620'
                : mem.upvote - mem.downvote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemeComponent;
