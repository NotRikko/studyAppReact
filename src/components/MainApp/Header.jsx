function Header({task, timerDuration}) {
    
    
    return (
        <div id="taskTime">
        <div id="task">Task: {task}</div>
        <div id="time">Time: {timerDuration} minutes</div>
        </div>
    )
   
}

export default Header