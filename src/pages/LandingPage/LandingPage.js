import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import { getAllMovies } from "../../api/movie.api";
import { CSpinner } from "@coreui/react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieList from "../../components/MovieList/MovieList";


function LandingPage(){

    const [moviesData, setMoviesData] = useState(null);
    
    const fetchMovies= async ()=>{
  try{ 
        const movies = await getAllMovies();
        setMoviesData(movies.data);
        }
        catch(e){
            console.log(e);
        }    }

    useEffect(()=>{
        fetchMovies();
    },[])


    return <div>
        <Navbar/>
        <Carousel/>

        <div className="text-center">


            {
                (moviesData===null ?  <CSpinner color="primary" variant="grow"/> : <MovieList moviesData={moviesData} /> )
            }


        </div>
    </div>
}

export default LandingPage;