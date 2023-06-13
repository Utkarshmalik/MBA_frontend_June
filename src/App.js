import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Auth from './pages/Auth/Auth';

function App() {
  return (

      <Router>

        <Routes>

          <Route exact path="/login" element={<Auth/>}/>
          <Route exact path="/register" />
          <Route exact path="/" />

        </Routes>

      </Router>

  );
}

export default App;
