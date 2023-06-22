import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getAllTheatres } from "../../api/theatres.api";
import { getAllMovies } from "../../api/movie.api";
import { getAllBookings } from "../../api/bookings.api";
import { getAllUsers } from "../../api/users.api";
import CardList from "../../components/CardList/CardList";


function Admin(){

    const [theatresList, setTheatersList] = useState([]);
    const [bookingsList, setBookingsList] = useState([]);
    const [moviesList, setMoviesList] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [counterInfo,setCounterInfo] = useState({
        theatres:0,
        movies:0,
        bookings:0,
        users:0});

    const fetchTheatres =  async ()=>{
        const theatres= await getAllTheatres();
        setTheatersList(theatres.data);

        counterInfo.theatres = theatres.data.length;
        setCounterInfo({...counterInfo});
    }
     const fetchMovies  =  async ()=>{
        const movies= await getAllMovies();
        setMoviesList(movies.data);

        counterInfo.movies = movies.data.length;
        setCounterInfo({...counterInfo});
    }
     const fetchBookings =  async ()=>{
        const bookings= await getAllBookings();
        setBookingsList(bookings.data);

        counterInfo.bookings = bookings.data.length;
        setCounterInfo({...counterInfo});
    }
     const fetchUsers =  async ()=>{
        const users= await getAllUsers();
        setUsersList(users.data);

          counterInfo.users = users.data.length;
        setCounterInfo({...counterInfo});
    }


    const init = async ()=>{
       await Promise.all([fetchTheatres(), fetchMovies(), fetchBookings(), fetchUsers()]);
    }

    useEffect(()=>{
      init();
    },[])


    return <>

   

    <Navbar/>

    <div className="bg-light mt-2 container-fluid">
        <h3 className="text-center"> Welcome , {localStorage.getItem('name')}! </h3>
        <p className="text-center text-secondary"> Take a quick look at your stats below </p>

        <CardList counterInfo={counterInfo}/>

       </div>

    </>
}

export default Admin;