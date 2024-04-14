import {Link} from 'react-router-dom'

function SignupForm() {
    return (
        <div id="signupContainer">
            <div id="signupHeader">
                <h2>Sign Up</h2>
                <h3>Track your time spent studying and connect with the community.</h3>
                <h3>Already have an account? <a>Log in</a></h3>
            </div>
            <form id="signupForm">
                <label class="signupLabel">
                    <b>Username</b>
                    <input type="text" />
                </label>
                <label class="signupLabel">
                    <b>Email</b>
                    <input type="email" />
                </label>
                <label class="signupLabel">
                    <b>Password</b>
                    <input type="password" />
                </label>
                <label class="signupLabel">
                    <b>Confirm Password</b>
                    <input type="password" />
                </label>
                <label class="signupCheckSec">
                    <input class="signupCheck" type="checkbox" />
                    I agree to Study Room's Terms of Service.
                </label>
                <label class="signupCheckSec">
                    <input class="signupCheck" type="checkbox" />
                    I wish to opt out of promotional emails.
                </label>
                <button type="submit">Sign Up</button>

            </form>
        </div>
    )
}

export default SignupForm