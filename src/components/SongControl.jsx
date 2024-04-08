import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPlayBackOutline } from "react-icons/io5";
import { IoPlayForwardOutline } from "react-icons/io5";
import { IoPauseCircleOutline} from "react-icons/io5";



function SongControl({isPlaying, onTogglePlayPause, onSongChangeNext, onSongChangePrev}) {
  const handlePlayPauseClick = () => {
    onTogglePlayPause(); 
  };

  const handleSongChangeClickNext = () => {
    onSongChangeNext();
  };

  const handleSongChangeClickPrev = () => {
    onSongChangePrev();
  };

  const buttonStyle = {
    width: "30px",
    height: "30px"

  };

  return (
      <div id="songControl">
        <audio id="songAudio" src="" />
        <button id="return" onClick={handleSongChangeClickPrev}>
          <IoPlayBackOutline style={buttonStyle} />
        </button>
        <button id="play" onClick={handlePlayPauseClick} >
            {" "}
            {isPlaying ? (
            <IoPauseCircleOutline style={buttonStyle} /> 
          ) : (
            <IoPlayCircleOutline style={buttonStyle} /> 
          )}
            {" "}
        </button>
        <button id="skip" onClick={handleSongChangeClickNext}>
          <IoPlayForwardOutline style={buttonStyle} />
        </button>
    </div>
  )
}


export default SongControl;