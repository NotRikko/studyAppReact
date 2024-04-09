import {useState} from 'react'

function Prompt({onStart}) {
  const [activity, setActivity] = useState('');
  const [duration, setTimerDuration] = useState('');
  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  }

  const handleDurationChange = (event) => {
    setTimerDuration(event.target.value);
  }

  const handleStartClick = () => {
    onStart(activity,parseInt(duration, 10));
  }

    return (
    <div id="prompt">
      <div id="question">What would you like to do today?</div>
      <input 
        type="text" 
        autoComplete="off" 
        id="promptInput"
        value={activity}
        onChange={handleActivityChange} 
      />
      <div id="howLong">How many minutes?</div>
      <input type="text"
        autoComplete="off" 
        id="timerSet"
        value={duration}
        onChange={handleDurationChange}
      />
      <input 
        type="button" 
        id="promptButton" 
        defaultValue="Start"
        onClick={handleStartClick} 
      />
    </div>
    )
}

export default Prompt