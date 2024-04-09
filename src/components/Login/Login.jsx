import LoginSection from './LoginSection'
import './LoginStyles.css'

function Login({onLogin}) {
    return (
        <div id="mainContainerLogin">
            <LoginSection onSubmission={onLogin}/>
        </div>
    )
}

export default Login