function Prompt() {
    return (
    <div id="prompt">
    <div id="question">What would you like to do today?</div>
    <input type="text" autoComplete="off" id="promptInput" />
    <div id="howLong">How many minutes?</div>
    <input type="text" autoComplete="off" id="timerSet" />
    <input type="button" id="promptButton" defaultValue="Start" />
  </div>
    )
}

export default Prompt