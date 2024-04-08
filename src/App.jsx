import { useState, useRef, useEffect } from 'react'
import SongControl from './components/SongControl'
import StudyGif from './components/StudyGif'
import Header from './components/Header'
import Prompt from './components/Prompt'
import {Songs} from './Data'

import './App.css'

function App() {
  const [songIndex, setSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [task, setTask] = useState('')
  const [showPrompt, setShowPrompt] = useState(true);
  const [timerDuration, setTimerDuration] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
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

 

  const startTimer = (timerDuration) => {
    console.log("Entering startTimer");
    if (timerDuration > 0 && !timerRunning) {
      console.log("Beginning")
      setTimerRunning(true);
      const interval = setInterval(() => {
        setTimerDuration((timerDuration) => {
          const updatedDuration = timerDuration -1
          setTimerDuration(updatedDuration);
          if (updatedDuration === 0) {
            clearInterval(interval);
            setTimerRunning(false);
            setShowPrompt(true);
            console.log("Finished")
          } else {
            console.log(updatedDuration);
            return updatedDuration
          }
        });
      }, 10000); 
    } else {
      console.log("Error!")
    }
  };

  

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

  const handleStartButtonClick = (activity,duration) => {
    setTask(activity);
    setTimerDuration(duration);
    startTimer(duration);
    console.log("Starting Timer");
    setShowPrompt(false);
  }

  //const handleVolumeChange = (newVolume) => {
    //setVolume(newVolume);
  //};

  let currentSong =Songs[songIndex];



  return (
    <div id="pageBody">
      {showPrompt && (<Prompt onStart={handleStartButtonClick}/>)}
      <div id="header">
        <Header
          task={task}
          timerDuration={timerDuration}
        />
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
