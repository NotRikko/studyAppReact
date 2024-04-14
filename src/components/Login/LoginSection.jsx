import {Link} from "react-router-dom"
import {useState} from 'react'
import Users from '../../Users'

export default function LoginSection({onSubmission}) {
    const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false
    });

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        const updatedValue = type === 'checkbox' ? checked: value;
        setFormData((prevFormData) => ({...prevFormData, [name]:updatedValue}));

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${formData.username}, Email: ${formData.password}, Message: ${formData.rememberMe}`)
        const validUser = Users.find((user) => user.username === formData.username && user.password === formData.password)
        if (validUser) {
            onSubmission();
        } else {
            alert("User/password incorrect")
        }
        
    }



    return (
        <div id="loginContainer">
            <div id="loginHeader">
                <h1>Study Room</h1>
                <h2>Login</h2>
                <h4>No account? 
                    <Link 
                    to="signup"
                    >Create an account
                    </Link>
                </h4>
            </div>
            <form id="loginForm" onSubmit={handleSubmit}>
                <label className="loginLabel">
                    <b>Username </b>
                    <input
                        type="text" 
                        name="username"
                        autoComplete="off"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <label className="loginLabel">
                    <b>Password </b>
                    <input
                        type="password" 
                        name="password"
                        autoComplete="off"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
                <label style={{ display: 'flex', justifyContent: 'center' }}>
                    <input 
                    type="checkbox"
                    name="rememberMe"
                    id="rememberCheckbox"
                    value={formData.rememberMe}
                    onChange={handleChange} />
                    Remember me
                </label>
            </form>
            <div id="loginFooter">
               <p>
                <a 
                 href="https://google.com"
                 target="_blank" 
                 rel="noopener noreferrer"
                >Forgot username?</a>
                </p> 
                <p>
                <a 
                 href="https://google.com"
                 target="_blank" 
                 rel="noopener noreferrer"
                >Forgot password?</a>
                </p> 
            </div>
    </div>
    )
}