import { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import Navbar from "../../../components/Navbar/Navbar";
import { getAllMovies } from "../../../api/movie.api";
import { CSpinner } from "@coreui/react";
import MovieCard from "../../../components/MovieCard/MovieCard";


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

    const getMoviesData=()=>{
        return moviesData.map((movie)=><MovieCard MovieDetail={movie}/>)
    }

    return <div>
        <Navbar/>
        <Carousel/>

        <div className="text-center">

            <h2> Recommended Movies </h2>

            {
                (moviesData===null ?  <CSpinner color="primary" variant="grow"/> : getMoviesData() )
            }


        </div>
    </div>
}

export default LandingPage;