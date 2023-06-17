
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MovieCard({movie}){

    const {name,description,posterUrl} = movie;

    console.log(posterUrl);

    return  <Card className='mx-3 my-3' style={{ width: '18rem', border:"1px solid black"}} >
      <Card.Img style={{height:"25rem"}} variant="top" src={posterUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Adipurush (Hindi: Ādipuruṣa transl. First man)[a] is a 2023 Indian epic mythological action film based on the epic Ramayana.[7] The film is written and directed by Om Raut and produced by T-Series and Retrophiles. Shot simultaneously in Hindi and Telugu, the film stars Prabhas, Saif Ali Khan, Kriti Sanon, Sunny Singh and Devdatta Nage.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Language </ListGroup.Item>
        <ListGroup.Item>Description</ListGroup.Item>
        <ListGroup.Item>Cast</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Likes 500k</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

}

export default MovieCard;