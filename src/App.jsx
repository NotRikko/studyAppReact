import { useState, useRef, useEffect } from 'react'
import SongControl from './components/SongControl'
import StudyGif from './components/StudyGif'
import Header from './components/Header'
import {Songs} from './Data'

import './App.css'

function App() {
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef=useRef(null);
  
  //const [volume, setVolume] = useState(50); 
  useEffect(() => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.play().catch(error => {
        console.log("Failed to play audio:", error);
      });
    } else {
      audioElement.pause();
    }
  }, [songIndex, isPlaying]);

  const handleSongChangeNext = () => {
    if(songIndex === Songs.length-1) {
      setSongIndex(0);
    } else {
      setSongIndex(songIndex+1);
      console.log(songIndex)
    }
  };

  const handleSongChangePrev = () => {
    if(songIndex === 0) {
      setSongIndex(Songs.length-1)
    } else {
      setSongIndex(songIndex-1);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  //const handleVolumeChange = (newVolume) => {
    //setVolume(newVolume);
  //};

  let currentSong =Songs[songIndex];



  return (
    <div id="pageBody">
      <div id="header">
        <Header />
      </div>
      <div id="mainContainer">
        <div id="wrapperDiv">
          <StudyGif
            songTitle={currentSong.title}
            songArtist={currentSong.artist}
            //volume={volume}
            //handleVolumeChange={handleVolumeChange}
          />
        
          <SongControl
            isPlaying={isPlaying}
            onTogglePlayPause={togglePlayPause}
            onSongChangeNext={handleSongChangeNext}
            onSongChangePrev={handleSongChangePrev}
          />
        </div>
        <div>
          <audio
            ref={audioRef}
            src={currentSong.url}
          />
        </div>
      </div>
    </div>
  
  )
}

export default App
