import React from 'react'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import {
    Container,
    Card,
    CardContent,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Avatar,
    Divider,
    OutlinedInput,
    Chip,
    Stack,
    Autocomplete,
    TextField
} from "@mui/material";

export default function Add() {
    console.info("Add Agent frm")
    const agendValidationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("First name is required")
            .max(60, 'First name maximum length is 60'),

        lastName: Yup.string()
            .required("Last name is required")
            .max(70, 'First name maximum length is 70'),
    });
    // Here init value of from
    const initialValues = {
        "firstName": "",
        "lastName": "",
    }
    const nameForm = React.useRef(null)
    // Here store apis data
    const [agendInitialValues, setAgendInitialValues] = React.useState(initialValues);
    const handleOnSubmit = async (values, { resetForm }) => {
        console.log("values",values);
    };
  return (
    <>
      <Header />
      <Sidebar />
            <div className="main-content app-content">
                <div className="container-fluid">

                    {/* <!-- PAGE-HEADER --> */}
                    <div className="page-header">
                      <h1 className="page-title my-auto">Customer Form</h1>
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
                                

                                <Formik
                                    initialValues={agendInitialValues}
                                    validationSchema={agendValidationSchema}
                                    onSubmit={handleOnSubmit}
                                    enableReinitialize={true}
                                >
                                    {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                                        <Form className="form-set" ref={nameForm}>
                                            <Card className="">
                                                <CardContent className='p-0'>
                                                  <div className="card-body"> 
                                                    <Grid container spacing={4}>
                                                        <Grid item xs={6}>
                                                            <InputLabel>First Name</InputLabel>
                                                            <TextField
                                                                type="text"
                                                                id="firstName"
                                                                placeholder="Enter First Name"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.firstName}
                                                                helperText={touched.firstName ? errors.firstName : ""}
                                                                error={touched.firstName && Boolean(errors.firstName)} 
                                                            />
                                                            
                                                        </Grid>

                                                        <Grid item xs={6}>
                                                            <InputLabel>Last Name</InputLabel>
                                                            <TextField
                                                                id="lastName"
                                                                type="text"
                                                                placeholder="Enter Last Name"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.lastName}
                                                                helperText={touched.lastName ? errors.lastName : ""}
                                                                error={touched.lastName && Boolean(errors.lastName)}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={6}>
                                                            <InputLabel>Mobile Number</InputLabel>
                                                            <TextField
                                                                id="mobileNumber"
                                                                type="text"
                                                                placeholder="Enter Mobile Number"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.mobileNumber}
                                                                helperText={touched.mobileNumber ? errors.lastName : ""}
                                                                error={touched.mobileNumber && Boolean(errors.mobileNumber)}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={6}>
                                                            <InputLabel>Email</InputLabel>
                                                            <TextField
                                                                id="email"
                                                                type="text"
                                                                placeholder="Enter Email"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.email}
                                                                helperText={touched.email ? errors.lastName : ""}
                                                                error={touched.email && Boolean(errors.email)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <InputLabel>Password</InputLabel>
                                                            <TextField
                                                                id="password"
                                                                type="text"
                                                                placeholder="Enter Password"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.password}
                                                                helperText={touched.password ? errors.password : ""}
                                                                error={touched.password && Boolean(errors.password)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <InputLabel>Confirm Password</InputLabel>
                                                            <TextField
                                                                id="confirmPassword"
                                                                type="text"
                                                                placeholder="Enter Confirm Password"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.confirmPassword}
                                                                helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                                                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <InputLabel>Address</InputLabel>
                                                            <TextField
                                                                id="address"
                                                                type="text"
                                                                placeholder="Enter Address"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.address}
                                                                helperText={touched.address ? errors.address : ""}
                                                                error={touched.address && Boolean(errors.address)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <InputLabel>Country</InputLabel>
                                                            <Select
                                                                id="country"
                                                                name="country"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.country}
                                                                helperText={touched.country ? errors.country : ""}
                                                                error={touched.country && Boolean(errors.country)}
                                                                
                                                            >
                                                                <MenuItem  value="1">India</MenuItem>
                                                                <MenuItem  value="2">US</MenuItem>
                                                                {
                                                                    // genders && genders.map((value, key) => (
                                                                    //     <MenuItem key={key} value={value.NEMSISCode}>{value.Name}</MenuItem>
                                                                    // ))
                                                                }
                                                            </Select>
                                                        </Grid>

                                                        <Grid item xs={4}>
                                                            <InputLabel>State</InputLabel>
                                                            <Select
                                                                id="state"
                                                                name="state"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.state}
                                                                helperText={touched.state ? errors.state : ""}
                                                                error={touched.state && Boolean(errors.state)}
                                                            >
                                                                <MenuItem  value="1">MP</MenuItem>
                                                                <MenuItem  value="2">UP</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid item xs={4}>
                                                            <InputLabel>City</InputLabel>
                                                            <Select
                                                                id="city"
                                                                name="city"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.city}
                                                                helperText={touched.city ? errors.city : ""}
                                                                error={touched.city && Boolean(errors.city)}
                                                            >
                                                                <MenuItem  value="1">Indore</MenuItem>
                                                                <MenuItem  value="2">Khargone</MenuItem>
                                                            </Select>
                                                        </Grid>
                                                    </Grid>
                                                  </div>  
                                                    <div className="card-header justify-content-between">
                                                        <div className="card-title">
                                                            Agnecy Infromation 
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <Grid container spacing={4}>
                                                            <Grid item xs={6}>
                                                                <InputLabel>Company Name</InputLabel>
                                                                <TextField
                                                                    type="text"
                                                                    id="companyName"
                                                                    placeholder="Enter Company Name"
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    value={values.companyName}
                                                                    helperText={touched.companyName ? errors.companyName : ""}
                                                                    error={touched.companyName && Boolean(errors.companyName)} 
                                                                />
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <InputLabel>Pan Number</InputLabel>
                                                                <TextField
                                                                    type="text"
                                                                    id="panNumber"
                                                                    placeholder="Enter Pan Number"
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    value={values.panNumber}
                                                                    helperText={touched.panNumber ? errors.panNumber : ""}
                                                                    error={touched.panNumber && Boolean(errors.panNumber)} 
                                                                />
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <InputLabel>Business Type</InputLabel>
                                                                <TextField
                                                                    type="text"
                                                                    id="businessType"
                                                                    placeholder="Enter Business Type"
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    value={values.businessType}
                                                                    helperText={touched.businessType ? errors.businessType : ""}
                                                                    error={touched.businessType && Boolean(errors.businessType)} 
                                                                />
                                                            </Grid>

                                                            <Grid item xs={6}>
                                                                <InputLabel>GST Number</InputLabel>
                                                                <TextField
                                                                    type="text"
                                                                    id="gstNumber"
                                                                    placeholder="Enter GST Number"
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    value={values.gstNumber}
                                                                    helperText={touched.gstNumber ? errors.gstNumber : ""}
                                                                    error={touched.gstNumber && Boolean(errors.gstNumber)} 
                                                                />
                                                            </Grid>

                                                            <Grid item xs={6}>
                                                                <InputLabel>Website</InputLabel>
                                                                <TextField
                                                                    type="text"
                                                                    id="website"
                                                                    placeholder="Enter Website"
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    value={values.website}
                                                                    helperText={touched.website ? errors.website : ""}
                                                                    error={touched.website && Boolean(errors.website)} 
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                            <button 
                                                            className='btn btn-primary'
                                                            type="submit"
                                                            
                                                        >Submit</button>
                                                            </Grid>
                                                        </Grid>
                                                    </div>    

                                                </CardContent>
                                            </Card>
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
