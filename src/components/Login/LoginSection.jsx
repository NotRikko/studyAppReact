import {useState} from 'react'

export default function LoginSection() {
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
    }



    return (
        <div id="loginContainer">
            <div id="loginHeader">
                <h2>Login to Study Room</h2>
                <h3>No account? 
                    <a 
                    href="https://google.com"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >Create an account</a>
                </h3>
            </div>
            <form onSubmit={handleSubmit}>
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
                        type="text" 
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