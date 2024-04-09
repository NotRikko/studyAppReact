import {useState} from 'react'
import PropTypes from 'prop-types';

function StudyGif({songTitle, songArtist, audioRef, currentSongUrl}) {

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div id ="studyGifContainer">
      <img
      id="studyGif"
      src="https://64.media.tumblr.com/ad9042c6fd131ce9b5c0fdae39a91102/tumblr_ouuiq8cdJK1tlgv32o1_540.gif"
      />
      <div id="songTitle">{songTitle}</div>
      <div id="songArtist">{songArtist}</div>
      <audio
        ref={audioRef}
        src={currentSongUrl}
      />
      <input 
        type="range" 
        id="volumeSlider" 
        defaultValue="0.5"
        onChange={handleVolumeChange}
        min="0"
        max="1"
        step="0.01"
      />
    </div>
    )
}

StudyGif.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songArtist: PropTypes.string.isRequired,
  audioRef: PropTypes.object.isRequired, 
  currentSongUrl: PropTypes.string.isRequired,
};



export default StudyGif