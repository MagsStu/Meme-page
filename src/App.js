import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ErrorPage } from './pages/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MemeComponent from './components/MemeComponent';
import './App.css';

const startMeme = [
  {
    title: 'F1 vs Indy',
    id: 'a1',
    upvote: 0,
    downvote: 20,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F81%2Ff1%2F0e%2F81f10e4e1e8a631ac5ccd9084d62b8c8.jpg&f=1&nofb=1&ipt=3cbcf02aefca2b631c129bab3eb4f20360d40b517c2230e10e7ab1ca353f3978&ipo=images',
    alt: 'Lorem ipsum',
  },
  {
    title: 'Indycar',
    id: 'a2',
    upvote: 15,
    downvote: 1,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FeUdlaD4.png&f=1&nofb=1&ipt=a89d696f228b3513365d7d6e3a25ad3b9c698f8e4f2be9abc6e3be3a39b4c53c&ipo=images',
    alt: 'Lorem ipsum',
  },
  {
    title: 'Canada 2019',
    id: 'a3',
    upvote: 20,
    downvote: 3,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2F92%2Fb2%2F1592b290c4a990c818e2f06eff81333d.jpg&f=1&nofb=1&ipt=988125994d9f43aed694889cb31bf6ab73333bafe8cb3e0d270949f7c586674a&ipo=images',
    alt: 'Lorem ipsum',
  },
  {
    title: 'Hope not',
    id: 'a4',
    upvote: 10,
    downvote: 3,
    img: 'https://i.imgflip.com/7dcsoo.jpg',
    alt: 'Lorem ipsum',
  },
  {
    title: 'It aint easy',
    id: 'a5',
    upvote: 1,
    downvote: 3,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Findycar-meme-drop-indycar-meme-drop-v0-xxjad0z4bf4b1.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3De449f46b2b200125256e0b90d667a674d0e03a5c&f=1&nofb=1&ipt=aaf503c6dc3d7dd8144ad3b8fb336f09302dcfbacd27b6005498151e8903616f&ipo=images',
  },
  {
    title: 'It be like that',
    id: 'a6',
    upvote: 6,
    downvote: 3,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F42%2F02%2F1d%2F42021d6c2b061f961ac218aa543b4334.jpg&f=1&nofb=1&ipt=d886922ea2ab5b8b239ebcf11b65234d97846b8ed064a4ddfa477c4d2ca64d52&ipo=images',
    alt: 'Lorem ipsum',
  },
  {
    title: 'Offcon',
    id: 'a7',
    upvote: 10,
    downvote: 15,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F1pt8u7.jpg&f=1&nofb=1&ipt=adaad70f8cf30367309e4a32932de40d6671cf86d82def1beb8f04658cc87830&ipo=images',
    alt: 'Lorem ipsum',
  },
  {
    title: 'Gap',
    id: 'a8',
    upvote: 11,
    downvote: 11,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-cdn.9gag.com%2Fphoto%2FaxjvOVK_700b.jpg&f=1&nofb=1&ipt=d0fb10da0890dad1ef898996ba5369c5099a7a834877d7a605c9bb84d0fff365&ipo=images',
    alt: 'Lorem ipsum',
  },
  {
    title: 'Race start',
    id: 'a9',
    upvote: 1,
    downvote: 10,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F47%2Fef%2F0a%2F47ef0a821be9256ef41e4edcd5d90f77.jpg&f=1&nofb=1&ipt=e73bca5524b1667ff35887526f4b01fe6f8c329118bf222933fed2fe9e064968&ipo=images',
  },
];

function App() {
  const [memy, setMemes] = useState(() => {
    return startMeme;
  });

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route
              path='/hot'
              element={
                <MemeComponent memy={memy} setMemes={setMemes} filter='hot' />
              }
            />
            <Route
              path='/'
              element={
                <MemeComponent
                  memy={memy}
                  setMemes={setMemes}
                  filter='regular'
                />
              }
            />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
