import "./App.css"
import Pablo from "./pablo-sign-in 1.svg"
import Union from "./Union.png"
import { Link } from "react-router-dom"

export default function Login(){
    return(
        <div>
            <div class="flex-container">
                <div class="web-id">
                    <div class="web-logo-title">
                    <img class="logo" src={Union} alt="logo" /><h1 class="web-title">lendsqr</h1>
                    </div>
                    <img class="pablo" src={Pablo} alt='pablo' />
                    <Link to="/dashboard">
                        <button variant="outlined">
                            Dashboard
                        </button>
                    </Link>
                </div>
                <div class="log-side-bar">
                    <div class="loggin-form">
                        <h1>Welcome!</h1>
                        <h3>Enter details of login.</h3>
                        <div class="user-form">
                            <form method="post">
                                <p>
                                    <input type="text" class ="user-bar" placeholder="Email" />
                                </p>
                                <p>
                                    <input type="password" name="password" class ="user-bar" placeholder="Password" />
                                    <button class="password-show" id="togglePassword">show</button>
                                </p>
                            </form>
                            <p class="forgot-password">FORGOT PASSWORD?</p>
                            <button class="login-button">Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}