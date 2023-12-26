import React from 'react'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import { Form, Formik } from "formik";
import {
    Grid,
    InputLabel,
    TextField,
    Button
} from "@mui/material";

export default function Edit() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content app-content">
                <div className="container-fluid">

                    {/* <!-- PAGE-HEADER --> */}
                    <div className="page-header">
                      <h1 className="page-title my-auto">Customer Form Edit</h1>
                      <div>
                        {/* <ol className="breadcrumb mb-0">
                          <li className="breadcrumb-item">
                            <a href="javascript:void(0)">Form Elements</a>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">Inputs</li>
                        </ol> */}
                      </div>
                    </div>
                    {/* <!-- PAGE-HEADER END --> */}


                    {/* <!-- Start:: row-1 --> */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                      Account Information
                                    </div>
                                    {/* <div className="prism-toggle">
                                        <button className="btn btn-sm btn-primary-light"><i className="ri-code-line ms-2 d-inline-block align-middle"></i></button>
                                    </div> */}
                                </div>
                                
                                <Formik>
                                    <Form>
                                        <div className="card-body">
                                            <Grid container spacing={4}>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">First Name:</InputLabel>
                                                    <TextField type="text" className="" fullWidth  id="input" placeholder='Json' />
                                                </Grid>
                                                <Grid item xs={6}> 
                                                    <InputLabel className="form-label">Last Name:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='Taylor' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Mobile Number:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='7410258963'/>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Email Address:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='jhon@info.com' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Password:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='*************' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Conform Password:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='*************' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Address:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='Ganesh, Indore' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Country:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='India' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">State:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='Madhya Pradesh' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">City:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='Indore'/>
                                                </Grid>
                                            </Grid> 
                                        </div>            
                                        <div className="card-header justify-content-between">
                                            <div className="card-title">
                                                Agnecy Infromation 
                                            </div>
                                            {/* <div className="prism-toggle">
                                                <button className="btn btn-sm btn-primary-light"><i className="ri-code-line ms-2 d-inline-block align-middle"></i></button>
                                            </div> */}
                                        </div> 
                                        <div className='card-body'>
                                            <Grid container spacing={4}>  
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Company Name:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='Dummy' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Pan Number:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='NQAP2536Q' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Bussinees Type:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='E-Commerce' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">GST Number:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='GSTID253621498' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">WebSite:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='www.dummy.com' />
                                                </Grid>
                                            </Grid>
                                            <div className='registerbtn mt-5' >
                                                <Button className='btn btn-primary'>Submit</Button>
                                            </div>
                                        </div>      
                                    </Form>
                                </Formik>             
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}
