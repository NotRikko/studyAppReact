export default function LoginSection() {
    return (
        <div id="loginContainer">
            <div id="loginHeader">
                <h2>Login Page</h2>
                <h3>No account? 
                    <a 
                    href="https://google.com"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >Create an account</a>
                </h3>
            </div>
            <form >
                <label>
                    Username: 
                    <input
                        type="text" 
                        autoComplete="off"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text" 
                        autoComplete="off"
                    />
                </label>
                <button type="submit">Submit</button>
                <input
                    type="checkbox"
                />
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