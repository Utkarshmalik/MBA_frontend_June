import { CSpinner } from "@coreui/react";
import { useEffect, useState } from "react";
import ReactPlayer  from "react-player";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { getMovieById } from "../../api/movie.api";
import { Button } from "react-bootstrap";

function MovieDetails(){

    const [movieDetails,setMovieDetails] =  useState(null);
    const  {movieId} = useParams();

    const fetchMovieDetails = async ()=>{
        const movieDetails = await getMovieById(movieId);
        setMovieDetails(movieDetails.data);
    }
    

    useEffect(()=>{
        fetchMovieDetails();
    },[])

    console.log(movieId);

        return <>

        <Navbar/>

        <div className="bg-light">

            {(!movieDetails) ?  <CSpinner color="primary" variant="grow"/> : <>

            <div className="bg-dark" style={{border:"3px solid black"}}>
                <ReactPlayer url={movieDetails.trailerUrl} controls={true} width="100%" height="40vh" />
            </div>

            <div style={{padding:"40px"}} className="row my-4 py-10">

            <div className="col-lg-3 col-md-12">
                <img src={movieDetails.posterUrl} width={300} height={500}/>    
            </div>

            <br/>
            <div className="col-lg-9 col-md-12">
                <h2 className="bolder"> About the Movie </h2> 

                <div>
                    <span> {movieDetails.description} </span>

                    <div>
                        <span className="badge text-bg-danger rounded-pill m-2 text-white"> {movieDetails.language} </span>
                        <span className="badge text-bg-danger rounded-pill m-2 text-white"> {movieDetails.releaseStatus} </span>

                    </div>

                    <hr/>

                    <h3> {movieDetails.name} </h3>
                    <h6 className="text-justify"> Directed by {movieDetails.director}</h6>
                    <h6 className="text-justify"> Released On  {movieDetails.releaseDate}</h6>

                    <br/>

                    <h5> Cast </h5>

                    {
                        movieDetails.casts.map((name)=>{

                            return <li> {name} </li>
                        })
                    }

                    <div className="my-3">
                          <Button className="text-white" variant="danger">

                            <Link to={`/buyTickets/${movieId}`}>

                              Book Tickets 

                            </Link>
                            
                            </Button>
                    </div>

                </div>

            </div>

            </div>  
        
            </> } 

        </div>

        <div>

        </div>

    </>
}

export default MovieDetails;