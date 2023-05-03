import './App.css';
import union from './Union.png';

export default function navbar(){
    return(
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <img class="logo" src={union} alt='logo' />
            <form class="form-inline" action="/action_page.php" >
                <input class="form-control mr-sm-2" type="text" placeholder="Search for anything" />
                <button class="btn btn-primary" type="submit">Search</button>
            </form>
            {/* <ul>
                <li></li>
            </ul> */}
        </nav>
    )
}