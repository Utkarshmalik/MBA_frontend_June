import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Auth from './pages/Auth/Auth';
import LandingPage from './pages/LandingPage/LandingPage';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import MovieTheatres from './pages/MovieTheatres/MovieTheatres';
import Admin from './pages/Admin/Admin';
import Booking from './pages/Bookings/Booking';

function App() {
  return (

      <Router>
        <Routes>
          
          <Route exact path="/login" element={<Auth/>}/>
          <Route exact path="/register" />
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/movie/:movieId/details" element={ <MovieDetails/>} />
          <Route exact path="/buyTickets/:movieId" element={ <MovieTheatres/>} />
          <Route exact path="/buyTickets/:movieId/:theatreId" element={ <Booking/>} />
          <Route exact path="/admin" element={ <Admin/>} />

        </Routes>

      </Router>

  );
}

export default App;
