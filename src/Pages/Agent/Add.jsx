import React from 'react'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Admin/Sidebar'
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { AgentAPI } from '../../Services/Agent.Service';
import toast, { Toaster } from 'react-hot-toast';
import {Link, Routes, Route, useNavigate,useParams} from 'react-router-dom';
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
    const navigate = useNavigate();
    const { slug } = useParams();
    console.log("slug",slug);

    console.info("Add Agent frm")
    const agendValidationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("First name is required")
            .max(60, 'First name maximum length is 60'),
        lastName: Yup.string()
            .required("Last name is required")
            .max(70, 'First name maximum length is 70'),
        email: Yup.string()
            .required("Email is required")
            .email('Enter valid email address'),
        mobileNumber: Yup.string()
            .required("Mobile number is required"),
        password: Yup.string()
                .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            //.email('Mobile number email address'),
    });
    // Here init value of from
    // const initialValues = {
    //     "firstName":"Ganesh",
    //     "lastName":"Dhamande",
    //     "email":"ganesh1@mailinator.com",
    //     "mobileNumber":"9575164541",
    //     "password":"123456789",
    //     "confirmPassword":"",
    //     "address":"Indore",
    //     "countryId":1,
    //     "stateId":1,
    //     "cityId":1,
    //     "companyName":"Check",
    //     "panNumber":"PAN00122",
    //     "businessType":"First Class",
    //     "gstNumber":"GST123",
    //     "website":"www.google.com"
    // }

    const initialValues = {
        "firstName":"",
        "lastName":"",
        "email":"",
        "mobileNumber":"",
        "password":"",
        "confirmPassword":"",
        "address":"",
        "countryId":"",
        "stateId":"",
        "cityId":"",
        "companyName":"",
        "panNumber":"",
        "businessType":"",
        "gstNumber":"",
        "website":""
    }
    const nameForm = React.useRef(null)
    // Here store apis data
    const [agendInitialValues, setAgendInitialValues] = React.useState(initialValues);
    const [formTitle, setFormTitle] = React.useState('Add Agent');

    React.useEffect(() => {
        if(slug){
            getUserData(slug);
            setFormTitle("Edit Agent");

        }
    }, [])

    const getUserData = async (slug) => {
        //console.log("slug",slug);
        AgentAPI.get(slug).then(async (response) => {
            if(response.data.status){
                //console.log("response",response.data.data);
                var result = response.data.data;
                let reInitialValuee = {};
                reInitialValuee.firstName = result.firstName;
                reInitialValuee.lastName = result.lastName;
                reInitialValuee.email = result.email;
                reInitialValuee.mobileNumber = result.mobileNumber;
                reInitialValuee.address = result.address;
                reInitialValuee.countryId = result.countryId ? result.countryId.toString(): "";
                reInitialValuee.stateId = result.stateId ? result.stateId.toString() : "";
                reInitialValuee.cityId = result.stateId ? result.cityId.toString(): "";
                reInitialValuee.companyName = result.companyName;
                reInitialValuee.panNumber = result.panNumber;
                reInitialValuee.businessType = result.businessType;
                reInitialValuee.gstNumber = result.gstNumber;
                reInitialValuee.website = result.website;
                reInitialValuee.password = "";
                reInitialValuee.confirmPassword = "";
                console.log('reInitialValuee',reInitialValuee);
                setAgendInitialValues(reInitialValuee);
            }else{
                toast.error(response.data.message);
            }
        }).catch((e) => {
            console.log(e);
            toast.error('Something went wrong');
        });
    };


    const handleOnSubmit = async (values, { resetForm }) => {
        console.log("values",values);
        if(slug){
            const response = await AgentAPI.update(values,slug);
            console.log("response",response.data.status);
            if(response.data.status){
                toast.success('Agent updated successfully');
                navigate(`/agent`)
            }else{
                toast.error(response.data.message);
            }
        }else{
            const response = await AgentAPI.create(values);
            console.log("response",response.data.status);
            
            if(response.data.status){
                toast.success('Agent added successfully');
                navigate(`/agent`)
            }else{
                toast.error(response.data.message);
            }
        }
         
        // await UserAPI.create(values).then(async (response) => {
        //     console.log("response",response);
        //     if(response.data.status){
        //         toast.success('Agent added successfully');
        //         navigate(`/agent`)
        //     }else{
        //         toast.success(response.data.message);
        //     }
            
        // }).catch((e) => {
        //     console.log(e);
        //     toast.error('Somthing went wrong');
        // });
    };
  return (
    <>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
      <Header />
      <Sidebar />
            <div className="main-content app-content">
                <div className="container-fluid">

                    {/* <!-- PAGE-HEADER --> */}
                    <div className="page-header">
                      <h1 className="page-title my-auto">{formTitle}</h1>
                      <div>
                        <ol className="breadcrumb mb-0">
                          <li className="breadcrumb-item">
                            <Link to={`/`}>Dashboard</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to={`/agent/`}>Agent</Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">{formTitle}</li>
                        </ol>
                      </div>
                    </div>
                    {/* <!-- PAGE-HEADER END --> */}


                    {/* <!-- Start:: row-1 --> */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                    Personal Information
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
                                                                name='password'
                                                                type="password"
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
                                                                name='confirmPassword'
                                                                type="password"
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
                                                                id="countryId"
                                                                name="countryId"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.countryId}
                                                                helperText={touched.countryId ? errors.countryId : ""}
                                                                error={touched.countryId && Boolean(errors.countryId)}
                                                                
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
                                                                id="stateId"
                                                                name="stateId"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.stateId}
                                                                helperText={touched.stateId ? errors.stateId : ""}
                                                                error={touched.stateId && Boolean(errors.stateId)}
                                                            >
                                                                <MenuItem  value="1">MP</MenuItem>
                                                                <MenuItem  value="2">UP</MenuItem>
                                                            </Select>
                                                        </Grid>

                                                        <Grid item xs={4}>
                                                            <InputLabel>City</InputLabel>
                                                            <Select
                                                                id="cityId"
                                                                name="cityId"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.cityId}
                                                                helperText={touched.cityId ? errors.cityId : ""}
                                                                error={touched.cityId && Boolean(errors.cityId)}
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
