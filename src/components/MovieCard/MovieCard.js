
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function MovieCard({movie}){

    const {name,description,posterUrl, language, casts, director,_id} = movie;

    console.log(posterUrl);

    return  <>
    <Link key={_id} to={`/movie/${_id}/details`}>
     <Card className='mx-3 my-3' style={{ width: '18rem', border:"1px solid black"}} >
      <Card.Img style={{height:"25rem"}} variant="top" src={posterUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Adipurush (Hindi: Ādipuruṣa transl. First man)[a] is a 2023 Indian epic mythological action film based on the epic Ramayana.[7] The film is written and directed by Om Raut and produced by T-Series and Retrophiles. Shot simultaneously in Hindi and Telugu, the film stars Prabhas, Saif Ali Khan, Kriti Sanon, Sunny Singh and Devdatta Nage.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='d-flex justify-content-between'>
          <span style={{fontWeight:600}} className='text-justify'>Language </span>     
          <span> {language} </span>               
          </ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-between'>

            <span style={{fontWeight:600}} className='text-justify'>Director </span>     
          <span> {director} </span> 

        </ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-between'>
           <span style={{fontWeight:600}} className='text-justify'>Cast </span>     
          <span  className='font-weight-bold' >  {casts.join(', ')} </span> 
       </ListGroup.Item>
      </ListGroup>
      <Card.Body>

        <div style={{fontSize:"1.5rem"}} className='d-flex align-items-center justify-content-between'>
         <i className='bi bi-hand-thumbs-up-fill text-success'> 60K </i>  
        <Card.Link href="#">See Trailer<i class="bi bi-arrow-right-circle"></i> </Card.Link>
        </div>
        
      </Card.Body>
    </Card>

    </Link>
    </>
   
}

export default MovieCard;