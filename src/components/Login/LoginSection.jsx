
export default function LoginSection() {
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
            <form >
                <label class="loginLabel">
                    <b>Username </b>
                    <input
                        type="text" 
                        autoComplete="off"
                    />
                </label>
                <label class="loginLabel">
                    <b>Password </b>
                    <input
                        type="text" 
                        autoComplete="off"
                    />
                </label>
                <button type="submit">Submit</button>
                <label style={{ display: 'flex', justifyContent: 'center' }}>
                    <input 
                    type="checkbox"
                    id="rememberCheckbox" />
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