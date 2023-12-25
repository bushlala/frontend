import React from 'react'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Admin/Sidebar'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
    Grid,
    InputLabel,
    TextField,
    Button
} from "@mui/material";



export default function Adform() {
    
    console.info("Add Agent frm")
    const agendValidationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("First name is required")
            .max(60, 'First name maximum length is 60'),

        lastName: Yup.string()
            .required("Last name is required")
            .max(70, 'First name maximum length is 70'),

            number: Yup.string()
            .required("Number is required"),

            emailAddress: Yup.string()
            .required("Email Address is required")
    });

     // Here init value of from
     const initialValues = {
        "firstName": "",
        "lastName": "",
        "number": "",
        "emailAddress": "",
    }

    // const nameForm = React.useRef(null)
    // Here store apis data
    //const [agendInitialValues, setAgendInitialValues] = React.useState(initialValues);
    const handleOnSubmit = async (values, { resetForm }) => {
        console.log("values",values);
    };
    
  return (
    <>
      <Header />
      <Sidebar />
      <div class="main-content app-content">
                <div class="container-fluid">

                    {/* <!-- PAGE-HEADER --> */}
                    <div class="page-header">
                      <h1 class="page-title my-auto">Agent Form</h1>
                      <div>
                        {/* <ol class="breadcrumb mb-0">
                          <li class="breadcrumb-item">
                            <a href="javascript:void(0)">Form Elements</a>
                          </li>
                          <li class="breadcrumb-item active" aria-current="page">Inputs</li>
                        </ol> */}
                      </div>
                    </div>
                    {/* <!-- PAGE-HEADER END --> */}


                    {/* <!-- Start:: row-1 --> */}
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Agent Information
                                    </div>
                                    {/* <div class="prism-toggle">
                                        <button class="btn btn-sm btn-primary-light"><i class="ri-code-line ms-2 d-inline-block align-middle"></i></button>
                                    </div> */}
                                </div>
                                
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={agendValidationSchema}
                                    onSubmit={handleOnSubmit}
                                    enableReinitialize={true}
                                    >
                                    {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                                    <Form>
                                        <div className="card-body">
                                            <Grid container spacing={4}>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">First Name:</InputLabel>
                                                    <TextField 
                                                        type="text" 
                                                        className="" 
                                                        fullWidth  
                                                        placeholder="Last Name"
                                                        onChange={handleChange}
                                                        value={values.firstName}
                                                        helperText={touched.firstName ? errors.firstName : ""}
                                                        error={touched.firstName && Boolean(errors.firstName)} 
                                                    />
                                                </Grid>
                                                <Grid item xs={6}> 
                                                    <InputLabel className="form-label">Last Name:</InputLabel>
                                                    <TextField type="text"
                                                     fullWidth 
                                                     placeholder="Last Name"
                                                     onChange={handleChange}
                                                     value={values.lastName}
                                                     helperText={touched.lastName ? errors.lastName : ""}
                                                     error={touched.lastName && Boolean(errors.lastName)}
                                                      />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Mobile Number:</InputLabel>
                                                    <TextField type="text" 
                                                    id="number" 
                                                    fullWidth
                                                    placeholder='7410258963'
                                                    onChange={handleChange}
                                                    value={values.number}
                                                    helperText={touched.number ? errors.number : ""}
                                                    error={touched.number && Boolean(errors.number)}/>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Email Address:</InputLabel>
                                                    <TextField 
                                                     type="text" 
                                                     className=""
                                                     fullWidth 
                                                     id="emailAddress"
                                                     placeholder='jhon@info.com'
                                                     onChange={handleChange}
                                                     value={values.emailAddress}
                                                     helperText={touched.emailAddress ? errors.emailAddress : ""}
                                                     error={touched.emailAddress && Boolean(errors.emailAddress)} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Password:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='*************' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel className="form-label">Conform Password:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='*************' />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <InputLabel className="form-label">Address:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='Ganesh, Indore' />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <InputLabel className="form-label">Country:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='India' />
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <InputLabel className="form-label">State:</InputLabel>
                                                    <TextField type="text" className="" fullWidth id="input" placeholder='Madhya Pradesh' />
                                                </Grid>
                                                <Grid item xs={4}>
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
                                                <Button className='btn btn-primary' type='Submit'>Submit</Button>
                                            </div>
                                        </div>      
                                    </Form>
                                    )}
                                </Formik>         
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}
