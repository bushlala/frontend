import React, {useState} from "react";
import Layout from "../../../Component/Layout/Agent/AgentLayout"
import {Modal, Button} from 'react-bootstrap'

export default function ReminderWebCheck() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  return (
    <>
      <Layout />
        <div className="main-content app-content reminderweb">
            <div className="container-fluid">
                <div className='row'>
                    <div class="col-xl-12">
                        <div className='card mt-4'>
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className="card-title">
                                            <h5 className='fw-bold'>Flight Booking</h5>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <button className='btn btn-danger float-end'>Reminder List</button>
                                        <Button className="nextButton btn-primary float-end me-2" onClick={handleShow}>
                                            Add Reminder
                                        </Button>
                                    <Modal size="md" show={showModal} onHide={handleClose} centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Add Reminder</Modal.Title>
                                        </Modal.Header>
                                            <Modal.Body>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label class="form-label">Select Date</label>
                                                        <div class="input-group">
                                                            <input type="date" class="form-control" id="inlineFormInputGroupUsername" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label class="form-label">Time:</label>
                                                            <select className='form-select'>
                                                                <option>00:00</option>
                                                                <option>01:00</option>
                                                                <option>02:00</option>
                                                                <option>03:00</option>
                                                                <option>04:00</option>
                                                            </select>
                                                    </div>
                                                    <div className="col-12">
                                                        <label class="form-label">Message</label>
                                                            <div class="input-group">
                                                                <textarea type="text" class="form-control" id="inlineFormInputGroupUsername" />
                                                            </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="primary" onClick={handleClose}>
                                                Submit
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    </div>
                                </div>
                                <div className="table-responsive mt-5">
                                    <table className="table text-nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Booking Date</th>
                                                <th>Ref. No</th>
                                                <th>PNR</th>
                                                <th>Flight</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Journey Date</th>
                                                <th>Status</th>
                                                <th>Total Fare</th>
                                                <th>Commission</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">Total Records:</div>
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
