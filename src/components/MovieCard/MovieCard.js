

function MovieCard({MovieDetail}){

    const {name,description,posterUrl} = MovieDetail;

    console.log(posterUrl);

    return <div>
        <img src={posterUrl} height={100} width={100} />
        <p> {name} </p>
        <p> {description} </p>

    </div>

}

export default MovieCard;