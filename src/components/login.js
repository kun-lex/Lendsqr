import "./App.css"
import Pablo from "./pablo-sign-in 1.svg"
import Union from "./Union.png"

export default function Login(){
    return(
        <div>
            <div class="flex-container">
                <div class="web-id">
                    <div class="web-logo-title">
                    <img class="logo" src={Union} alt="logo" /><h1 class="web-title">lendsqr</h1>
                    </div>
                    <img class="pablo" src={Pablo} alt='pablo' />
                </div>
                <div class="log-side-bar">
                    <div class="loggin-form">
                        <h1>Welcome!</h1>
                        <h3>Enter details of login</h3>
                        <ul class="user-form">
                            <li>
                                <input type="text" class ="user-bar" placeholder="Email" />
                            </li>
                            <li>
                                <input type="text" class ="user-bar" placeholder="Password" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}