import React from 'react'
import Layout from '../../../Component/Layout/Agent/AgentLayout';

export default function Invoice() {
  return (
    <>
      <Layout />
      <div className="main-content app-content invoice">
            <div className="container-fluid">
                <div className='row'>
                    <div class="col-xl-12">
                        <div className='card mt-4'>
                            <div class="card-body">
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active border" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa-solid fa-plane-up me-1"></i> Flight Invoice </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link border" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fa-solid fa-hotel me-1"></i> Hotel Invoice </button>
                                    </li>
                                </ul>
                                <hr></hr>
                                <div class="tab-content" id="pills-tabContent">
                                    
                                <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <h5 className='fw-bold'> Flight Invoice </h5>
                                <hr></hr>
                                <div className="table-responsive">
                                    <table className="table text-nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Booking No.</th>
                                                <th>Invoice ID</th>
                                                <th>Airline</th>
                                                <th>Departure</th>
                                                <th>Arrival</th>
                                                <th>PNR</th>
                                                <th>Commission</th>
                                                <th>GST</th>
                                                <th>TDS</th>
                                                <th>Inv Amt</th>
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
                                                <td>--</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <h5 className='fw-bold'>Hotel Invoice</h5>
                                <hr></hr>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap w-100">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Booking No.</th>
                                                    <th>Invoice ID</th>
                                                    <th>Airline</th>
                                                    <th>Departure</th>
                                                    <th>Arrival</th>
                                                    <th>PNR</th>
                                                    <th>Commission</th>
                                                    <th>GST</th>
                                                    <th>TDS</th>
                                                    <th>Inv Amt</th>
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
                                                    <td>--</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
