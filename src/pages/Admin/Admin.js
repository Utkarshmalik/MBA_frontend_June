import { createContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getAllTheatres } from "../../api/theatres.api";
import { getAllMovies } from "../../api/movie.api";
import { getAllBookings } from "../../api/bookings.api";
import { getAllUsers } from "../../api/users.api";
import CardList from "../../components/CardList/CardList";
import { keys } from "../../utils/constants";
import { Cell, Column, HeaderCell, Table } from "rsuite-table";
import TheatresTable from "../../components/Tables/TheatresTable/TheatresTable";
import MoviesTable from "../../components/Tables/MoviesTable/MoviesTable";
import BookingsTable from "../../components/Tables/Bookings/Bookings";
import UsersTable from "../../components/Tables/Users/Users";



const dataList = [
  { id: 1, name: 'a', email: 'a@email.com', avartar: '...' },
  { id: 2, name: 'b', email: 'b@email.com', avartar: '...' },
  { id: 3, name: 'c', email: 'c@email.com', avartar: '...' }
];




export const WidgetContext = createContext();

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

    const [showMoviesTable, setShowMoviesTable] = useState(false);
        const [showTheatresTable, setShowTheatresTable] = useState(false);
    const [showBookingsTable, setShowBookingsTable] = useState(false);
    const [showUsersTable, setShowUsersTable] = useState(false);


    const show = {};
    show[keys.THEATRE] = showTheatresTable;
    show[keys.MOVIE] = showMoviesTable;
    show[keys.BOOKING] = showBookingsTable;
    show[keys.USER] = showUsersTable;


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

    const onWidgetClick=(id)=>{

         setShowTheatresTable(false);
         setShowMoviesTable(false);
         setShowBookingsTable(false);
          setShowUsersTable(false);

        if(id=== keys.THEATRE){
            setShowTheatresTable(true);
        }
        else if(id===keys.MOVIE){
            setShowMoviesTable(true);
        }
        else if(id===keys.BOOKING){
            setShowBookingsTable(true);
        }
        else if(id===keys.USER){
            setShowUsersTable(true);
        }
    }

    return <>
    <Navbar/>

    <div className="bg-light  container-fluid p-3">
        
        <h3 className="text-center"> Welcome , {localStorage.getItem('name')}! </h3>
        <p className="text-center text-secondary"> Take a quick look at your stats below </p>
        <WidgetContext.Provider value={{onWidgetClick, show}} >
        <CardList counterInfo={counterInfo}/>
        </WidgetContext.Provider>
        <div >
         { showTheatresTable &&  <TheatresTable theatresList={theatresList}/> }
         { showMoviesTable &&  <MoviesTable moviesList={moviesList}/> }
        { showBookingsTable &&  <BookingsTable bookingsList={bookingsList}/> }
        { showUsersTable &&  <UsersTable usersList={usersList}/> }
        </div>
       </div>

    </>
}

export default Admin;