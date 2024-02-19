import React, {useState} from "react";
import Layout from '../../../Component/Layout/Agent/AgentLayout';
import banner from '../../../assets/images/nobannerblue.png'
import {Modal, Button} from 'react-bootstrap'
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import './HotelBooking.css'

export default function HotelBooking() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
  return (
    <>
      <Layout />
      <div className="main-content app-content HotelBooking">
            <div className="container-fluid">
                <div className='row'>
                     <div class="col-xl-12">
                        <div className='card mt-4'>
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="card-title">
                                        <h6 className='fw-bold'><i class="fa-solid fa-hotel me-2"></i>Hotel</h6>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <Button className="nextButton btn-primary float-end me-2" onClick={handleShow}>
                                        Add Hotel
                                    </Button>
                                    <Modal size="xl" show={showModal} onHide={handleClose} centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Add Hotel</Modal.Title>
                                        </Modal.Header>
                                            <Modal.Body>
                                                <div className="row">
                                                    <div className="col-4 mb-4">
                                                        <label class="form-label">Location</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <label class="form-label">Hotel Category * 1290</label>
                                                        <select className='form-select'>
                                                            <option>1 Star</option>
                                                            <option>2 Star</option>
                                                            <option>3 Star</option>
                                                            <option>4 Star</option>
                                                            <option>5 Star</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <label class="form-label">Hotel Type*</label>
                                                        <select className='form-select'>
                                                            <option>Hotel</option>
                                                            <option>Guest House</option>
                                                            <option>House</option>
                                                            <option>Oyo Rooms</option>
                                                            <option>Palace</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-8 mb-4">
                                                        <label class="form-label">Hotel Name*</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <label class="form-label">Booking Type</label>
                                                        <select className='form-select'>
                                                            <option>Query</option>
                                                            <option>Book</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <label class="form-label">Check-In Time</label>
                                                        <select className='form-select'>
                                                            <option>00:00</option>
                                                            <option>12:15 AM</option>
                                                            <option>12:30 AM</option>
                                                            <option>12:45 AM</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <label class="form-label">Check-Out Time</label>
                                                        <select className='form-select'>
                                                            <option>00:00</option>
                                                            <option>12:15 AM</option>
                                                            <option>12:30 AM</option>
                                                            <option>12:45 AM</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <label class="form-label">Cancellation Type</label>
                                                        <select className='form-select'>
                                                            <option>Free Cancellation</option>
                                                            <option>Cancellation Charges Apply</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label class="form-label">Address</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" placeholder="Address" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                    </div>
                                                    <div className="col-6 mb-4">
                                                        <label class="form-label">Latitude</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                    </div>
                                                    <div className="col-6 mb-4">
                                                        <label class="form-label">Longitude</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label class="form-label">About Hotel</label>
                                                            <div class="input-group">
                                                                <textarea type="text" class="form-control" placeholder="Write here about hotel" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                    </div>
                                                    <hr></hr>
                                                    <h5 className="">Amenities</h5>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                                24 hour front desk
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                                Breakfast
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                                Massage
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Pool Bar
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Swimming Pool
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            AC
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Breakfast Buffet
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Outdoor Pool(s)
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Restaurant
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Tea/Coffee Maker
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Bar
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Conference Room
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Parking
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Safe
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Wi-Fi
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Bathroom
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Fitness
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Pay at hotel
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            Spa Service
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 mb-4 mt-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label class="form-check-label" for="flexCheckChecked">
                                                            zero cancellation
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label class="form-label">Hotel Photo 1</label>
                                                        <div class="input-group">
                                                            <input class="form-control" type="file" id="input-image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label class="form-label">Hotel Photo 2</label>
                                                        <div class="input-group">
                                                            <input class="form-control" type="file" id="input-image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label class="form-label">Hotel Photo 3</label>
                                                        <div class="input-group">
                                                            <input class="form-control" type="file" id="input-image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label class="form-label">Hotel Photo 4</label>
                                                        <div class="input-group">
                                                            <input class="form-control" type="file" id="input-image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label class="form-label">Hotel Photo 5</label>
                                                        <div class="input-group">
                                                            <input class="form-control" type="file" id="input-image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={handleClose}>
                                                Save <i class="fa-solid fa-bookmark"></i>
                                            </Button>
                                        </Modal.Footer>
                                    </Modal> 
                                </div>
                                <hr className='mt-3'></hr>
                            </div>
                            <div className='col-4 d-flex'>
                                <input type='search' className="form-control me-2" placeholder='Enter Keyword' />
                                <button className='btn btn-success'><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div> 
                            <div className="card-body mt-3">
                                <div className="table-responsive">
                                    <table className="table text-nowrap w-100">
                                        <thead>
                                                <tr>
                                                <th>Photo</th>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Destination</th>
                                                <th>Cancellation</th>
                                                <th>Booking Type</th>
                                                <th>Status</th>
                                                <th>Edit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='table-td'>
                                                    <img className='w-75' src={ banner } />
                                                </td>
                                                <td>demo</td>
                                                <td><button className='btn btn-dark'>Hotel</button></td>
                                                <td>Indore</td>
                                                <td>Free Cancellation</td>
                                                <td>Query</td>
                                                <td><button className='btn btn-danger'>In-Active</button></td>
                                                <td>
                                                    <button className='btn btn-primary me-1'><i class="fa-solid fa-pen-to-square"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="d-flex">
                                        <p><i class="fa-solid fa-right-long me-3"></i></p>
                                        <div>
                                            <Typography className="nextButton" onClick={handleShow1}>
                                                <div className='d-flex'>
                                                    <div className=''>
                                                        <div className="fs-13" id="">room1 (1 INR)</div>
                                                        <div className="mt-1" id=""><button className="btn btn-info addroom-btn">+ Add Room Type</button></div>
                                                    </div>
                                                </div> 
                                                </Typography>
                                            <Modal size="xl" show={showModal1} onHide={handleClose1} centered>
                                                <Modal.Header closeButton></Modal.Header>
                                                <Modal.Body>
                                                    <div className="row">
                                                        <div className="col-4 mb-4">
                                                            <label class="form-label">Room Name*</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 mb-4">
                                                            <label class="form-label">Inclusion*</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 mb-4">
                                                            <label class="form-label">Cancellation Policy*</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-3 mb-4">
                                                            <label class="form-label">Valid From*</label>
                                                            <div class="input-group">
                                                                <input type="date" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-3 mb-4">
                                                            <label class="form-label">Valid To*</label>
                                                            <div class="input-group">
                                                                <input type="date" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-2 mb-4">
                                                            <label class="form-label">Room Cost*</label>
                                                            <div class="input-group">
                                                                <input type="number" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-2 mb-4">
                                                            <label class="form-label">Child With Bad</label>
                                                            <div class="input-group">
                                                                <input type="number" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                        </div>
                                                        <div className="col-2 mb-5">
                                                            <label class="form-label">Child No Bad</label>
                                                            <div class="input-group">
                                                                <input type="number" class="form-control" id="inlineFormInputGroupUsername"  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Button variant="primary" onClick={handleClose}>
                                                        Save <i class="fa-solid fa-bookmark"></i>
                                                    </Button>
                                                    <hr></hr>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table text-nowrap w-100">
                                                                <thead>
                                                                        <tr>
                                                                        <th>Room</th>
                                                                        <th>Inclusion</th>
                                                                        <th>Cancellation Policy</th>
                                                                        <th>From</th>
                                                                        <th>To</th>
                                                                        <th>Room Cost</th>
                                                                        <th>Child With Bad</th>
                                                                        <th>Child Without Bad</th>
                                                                        <th>Edit</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>room1</td>
                                                                        <td>demo</td>
                                                                        <td>demo</td>
                                                                        <td>03-01-2024</td>
                                                                        <td>03-04-2024</td>
                                                                        <td>1 INR</td>
                                                                        <td>2 INR</td>
                                                                        <td>2 INR</td>
                                                                        <td>
                                                                            <button className="btn btn-light me-2"><i class="fa-solid fa-pen-to-square"></i></button>
                                                                            <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                                                        </td>
                                                                    </tr> 
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                            </Modal> 
                                        </div>
                                    </div>
                                    <hr></hr> 
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">Total Records: 1-0 of 0</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    
    </>
  )
}
