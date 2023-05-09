import Main from "./main";
import Login from "./pages/login";
import Navbar from "./pages/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar/>
        <Main />
        <Routes>
         <Route exact path='/login' element= {<Login />} />
        </Routes>
      </Router>
      
  );
}

export default App;
