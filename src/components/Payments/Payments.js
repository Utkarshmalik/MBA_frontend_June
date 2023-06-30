import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Payments({show,setShow, theatresDetail, movieDetails, selectedSeats, confirmBooking, bookingDetails, closeModel }) {

  const handleClose = closeModel;
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ORDER SUMMARY</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div className='row'>
                <div className='col my-2'>
                    <h5> {movieDetails.name}</h5>
                    <small> {movieDetails.language} </small>
                    <br/>
                    <small className='fw-bolder'> {theatresDetail.name} </small>
                    <br/>
                    <small className='text-success'> m-Ticket </small>
                </div>

                <div className='col-5'>
                    <h5> {selectedSeats.length}  Tickets </h5>    
                </div>

            </div>

            <hr/>

            <div className='row'>

                <div className='col'>
                    <p> Total </p>
                </div>

                   <div className='col-3'>
                    <p> Rs {movieDetails.price * selectedSeats.length} </p>
                </div>
            </div>

                        <hr/>


            {

                bookingDetails && 
            <div>
                {
                     bookingDetails.status==="SUCCESS" ? (


                        <div className='d-flex flex-column justify-content-between align-items-center'>
                            <img src={movieDetails.posterUrl} height={100} width={100} />

                            <h5> Booking Confirmed !</h5>
                            <small> Booking Id :  </small>
                            <p className='fw-bolder'> {bookingDetails._id} </p>

                        </div>
                    ):

                        <div className='d-flex flex-column justify-content-between align-items-center'>
                            <img src={movieDetails.posterUrl} height={100} width={100} />

                            <h5> Booking Failed !</h5>
                            <small>Please Retry  </small>

                        </div>


                }

            </div>
         }

         


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {   !bookingDetails &&
                    <Button variant="primary" onClick={confirmBooking}>
                        Confirm Paymemt 
                    </Button>
           }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Payments;