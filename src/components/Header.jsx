function Header({task, time}) {
    return (
        <div id="taskTime">
        <div id="task">Task: {task}</div>
        <div id="time">Time: {time}</div>
        </div>
    )
   
}

export default Header