import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import { getAllMovies } from "../../api/movie.api";
import { CSpinner } from "@coreui/react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieList from "../../components/MovieList/MovieList";


let allMovieData=[];

function LandingPage(){

    const [moviesData, setMoviesData] = useState(null);

    const filterMovies = (searchValue)=>{
            console.log(allMovieData);

        const filteredMovies = allMovieData.filter((movie)=>{
            const movieName = movie.name.toLowerCase();
            console.log(movieName);
            return movieName.startsWith(searchValue.toLowerCase());
        })

        setMoviesData(filteredMovies);
    }
    
    const fetchMovies= async ()=>{
  try{ 
        const movies = await getAllMovies();
        allMovieData = movies.data;
        setMoviesData(movies.data);
        }
        catch(e){
            console.log(e);
        }    }

    useEffect(()=>{
        fetchMovies();
    },[])


    return <div>
        <Navbar filterMovies={filterMovies}/>
        <Carousel/>

        <div className="text-center">


            {
                (moviesData===null ?  <CSpinner color="primary" variant="grow"/> : <MovieList moviesData={moviesData} /> )
            }


        </div>
    </div>
}

export default LandingPage;