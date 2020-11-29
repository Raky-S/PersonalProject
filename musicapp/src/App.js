import React from 'react';
import { useState, useEffect } from 'react';
import Player from './components/Player.js';

function App() {
  const [songs] = useState([
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      img_src: "./images/song-1.jpg",
      src: "./music/Ed_Sheeran-Perfect.mp3"
    },
    {
      title: "Think Out Loud",
      artist: "Ed Sheeran",
      img_src: "./images/song-2.jpg",
      src: "./music/Ed_Sheeran-Thinking.mp3"
    },
    {
      title: "Beautiful People",
      artist: "Ed Sheeran",
      img_src: "./images/song-3.jpg",
      src: "./music/Ed_Sheeran-Beautiful_People.mp3"
    },
    {
      title: "I van Change",
      artist: "John Legend",
      img_src: "./images/song-4.jpg",
      src: "./music/John_Legend-I_Can_Change.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
