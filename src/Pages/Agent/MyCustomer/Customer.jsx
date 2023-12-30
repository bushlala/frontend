import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from '@emotion/styled';
import tableCellClasses from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
// import { UserAPI } from '../../../Services/Agent.Service';
import Header from '../../../Component/Layout/Agent/Header/Header'
import Sidebar from '../../../Component/Layout/Agent/Sidebar/Sidebar'




  export default function Index() {


  return (
    <>
       <Header />
       <Sidebar />
       <div className="main-content app-content">
            <div className="container-fluid">
      {/* <!-- PAGE-HEADER --> */}
                <div className="page-header">
                  <h1 className="page-title my-auto">My Customer</h1>
                  <div>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                      <Link to={`/`}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">My Customer</li>
                    </ol>
                  </div>
                </div>
                {/* <!-- PAGE-HEADER END--> */}
                <div className="row">
                    {/* <div className="col-12 col-sm-12">
                        <div className="card">
                            <div className="card-header d-lg-flex">
                               
                                <div className="tabs-menu1 ms-auto border-0 p-0">
                                    <ul className="nav panel-tabs product-sale">
                                        <li><button type="button" className="btn" style={{ backgroundColor: '#6c757d' }}><Link to='/Admin/agent/add' style={{ color: 'white'}}>+ Add Customer</Link></button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body product-table">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table-bordered">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>First Name </TableCell>
                                            <TableCell >Last Name</TableCell>
                                            <TableCell >Gender</TableCell>
                                            <TableCell >DOB</TableCell>
                                            <TableCell >Passport</TableCell>
                                            <TableCell >Expriry</TableCell>
                                            <TableCell >Update</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell><Typography variant="span" className="mb-0 fs-14 fw-semibold"> Rajat</Typography></TableCell>
                                                <TableCell><Typography variant="span" className="mb-0 fs-14 fw-semibold"> Patidar </Typography></TableCell>
                                                <TableCell><Typography variant="span" className="mb-0 fs-14 fw-semibold"> Male </Typography></TableCell>
                                                <TableCell ><Typography variant="span" className="mb-0 fs-14 fw-semibold"> 30Aug2000 </Typography></TableCell>
                                                <TableCell ><Typography variant="span" className="mb-0 fs-14 fw-semibold"> ADSFE25462Y </Typography></TableCell>
                                                <TableCell ><Typography variant="span" className="mb-0 fs-14 fw-semibold"> 25/12/2025 </Typography></TableCell>
                                                <TableCell ><Typography variant="span" className="mb-0 fs-14 fw-semibold"> 27/12/2023 </Typography></TableCell> */}

                                                {/* <TableCell> */}
                                                    {/* <Typography variant="span" className="mb-0 fs-14 fw-semibold">  */}
{/* 
                                                        <Link to={`/Admin/agent/edit/`} className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><Typography variant="span" className="fa fa-edit fs-14"> </Typography> </Link> */}

                                                        {/* <Link to={`/agent/edit/${agent.id}`} className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><Typography variant="span"className="fa fa-trash fs-14"> </Typography> </Link> */}

                                                        {/* <Link to='/agentview' className="btn text-dark btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><Typography variant="span"className="fa-solid fa-eye"> </Typography> </Link> */}
                                                    {/* </Typography> */}
                                                {/* </TableCell> */}
                                            {/* </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div> */}
                     {/* </div> */}
                     <div class="card custom-card">
                            <div class="card-header justify-content-between">
                                <div class="card-title">
                                    Customer
                                </div>
                                <div class="prism-toggle">
                                <Link to='/agent/customerform'><button class="btn btn-primary-light">+ Add Coustomer</button></Link>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">DOB</th>
                                                <th scope="col">Passport</th>
                                                <th scope="col">Expriry</th>
                                                <th scope="col">Update</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">John</th>
                                                <td>Mark</td>
                                                <td>Male</td>
                                                <td>30/12/2020</td>
                                                <td>PA2514236</td>
                                                <td>30/12/2025</td>
                                                <td>30/12/2022</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">John</th>
                                                <td>Mark</td>
                                                <td>Male</td>
                                                <td>30/12/2020</td>
                                                <td>PA2514236</td>
                                                <td>30/12/2025</td>
                                                <td>30/12/2022</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">John</th>
                                                <td>Mark</td>
                                                <td>Male</td>
                                                <td>30/12/2020</td>
                                                <td>PA2514236</td>
                                                <td>30/12/2025</td>
                                                <td>30/12/2022</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">John</th>
                                                <td>Mark</td>
                                                <td>Male</td>
                                                <td>30/12/2020</td>
                                                <td>PA2514236</td>
                                                <td>30/12/2025</td>
                                                <td>30/12/2022</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                </div> 
            </div> 
        </div>
    </>

  )

}