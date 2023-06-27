import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getTheatresForAMovie } from "../../api/theatres.api";
import { Spinner } from "react-bootstrap";
import { getMovieById } from "../../api/movie.api";



const MovieTheatres=()=>{

    const {movieId : selectedMovie} = useParams();
    const [theatresDetail, setTheatersDetails] = useState([]);
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading , setIsLoading] = useState(true);

    const getTheatres = async () => {
        const theatresData= await   getTheatresForAMovie(selectedMovie);
        setTheatersDetails(theatresData.data);
    }

    const getMovieDetails = async ()=>{
        const movieDetails = await getMovieById(selectedMovie);
        setMovieDetails(movieDetails.data);
    }

    useEffect(()=>{
        getTheatres();
        getMovieDetails();
        setIsLoading(false);
        console.log(movieDetails);
    },[])

    return <div>

        <Navbar/>

        {isLoading && <Spinner/>}

        {

        
        !isLoading && <div className="bg-black text-center py-4">

            <h2 className="fw-bolder text-white"> {movieDetails.name} </h2>

                <div className="text-white">
                    <span> {movieDetails.description} </span>

                    <div className="text-white">
                        <span className="badge text-bg-danger rounded-pill m-2 text-white"> {movieDetails.language} </span>
                        <span className="badge text-bg-danger rounded-pill m-2 text-white"> {movieDetails.releaseStatus} </span>

                    </div>
 
                    <hr/>
                    <h6 className="text-justify"> Directed by {movieDetails.director}</h6>
                    <h6 className="text-justify"> Released On  {movieDetails.releaseDate}</h6>

                    <br/>

                    </div>

                              <div>

                        {
                            theatresDetail.map((theatre)=>{
                                return <h1> {theatre.name} </h1>
                            })
                        }
                     </div>


             
                    </div>

                 

        }
        <div>

        </div>


    </div>

}

export default MovieTheatres;