import {Songs} from '../Data.jsx';
import PropTypes from 'prop-types';

function StudyGif({songTitle, songArtist}) {
    return (
    <div id ="studyGifContainer">
      <img
      id="studyGif"
      src="https://64.media.tumblr.com/ad9042c6fd131ce9b5c0fdae39a91102/tumblr_ouuiq8cdJK1tlgv32o1_540.gif"
      />
      <div id="songTitle">{songTitle}</div>
      <div id="songArtist">{songArtist}</div>
      <input type="range" id="volumeSlider" />
    </div>
    )
}

StudyGif.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songArtist: PropTypes.string.isRequired,
};



export default StudyGif