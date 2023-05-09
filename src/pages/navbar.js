import './App.css';
import union from './Union.png';

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <div class="container-fluid">
            <div class="d-flex">
            <img class="logo" src={union} alt='logo' width="20px" height="20px" />
            <h3>lendsqr</h3>
            </div>
            <form class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Search for anything" />
                <button class="btn btn-primary" type="submit"><i class="fas fa-search"></i></button>
            </form>
            </div>
        </nav>
    )
}