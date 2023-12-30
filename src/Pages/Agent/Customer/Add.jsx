import React from 'react'

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomerService } from '../../../Services/Agent/Customer.Service';
import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import toast, { Toaster } from 'react-hot-toast';
import {Link,useNavigate,useParams} from 'react-router-dom';
import {
    Card,
    CardContent,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button
} from "@mui/material";

export default function AgentCustomerAdd() {
    const navigate = useNavigate();
    const { slug } = useParams();
    console.log("slug",slug);
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("Title is required"),
            //.max(60, 'First name maximum length is 60'),
        firstName: Yup.string()
            .required("First name is required")
            .max(60, 'First name maximum length is 60'),
        lastName: Yup.string()
            .required("Last name is required")
            .max(70, 'First name maximum length is 70'),
        gender: Yup.string()
            .required("Gender is required"), 
        email: Yup.string()
            .required("Email is required")
            .email('Enter valid email address'),
        mobileNumber: Yup.string()
            .required("Mobile number is required"),
        passport: Yup.string()
            .required('Passport is required'),
        dob: Yup.string()
            .required('Date of birth is required'),
        passportExp: Yup.string()
            .required('Passport Expiry is required'),
    });
    const initialValues = {
        "title":"",
        "firstName":"",
        "lastName":"",
        "gender":"male",
        "email":"",
        "mobileNumber":"",
        "passport": "",
        "dob":"",
        "passportExp":"",
    }
    const nameForm = React.useRef(null)
    // Here store apis data
    const [reInitialValues, setReInitialValues] = React.useState(initialValues);
    const [formTitle, setFormTitle] = React.useState('Customer');

    const [formAction, setFormAction] = React.useState('Add');

    React.useEffect(() => {
        if(slug){
            getUserData(slug);
            setFormTitle("Customer");
            setFormAction("Edit");
        }
    }, [slug])

    const getUserData = async (slug) => {
        //console.log("slug",slug);
        CustomerService.get(slug).then(async (response) => {
            if(response.data.status){
                //console.log("response",response.data.data);
                var result = response.data.data;
                console.log("result",result);
                let reInitialValuee = {};
                reInitialValuee.title = result.title;
                reInitialValuee.firstName = result.firstName;
                reInitialValuee.lastName = result.lastName;
                reInitialValuee.email = result.email;
                reInitialValuee.mobileNumber = result.mobileNumber;
                reInitialValuee.dob = result.DOB;
                reInitialValuee.gender = result.gender.toLowerCase();
                reInitialValuee.passport = result.passport;
                reInitialValuee.passportExp = result.passportExp;
                console.log('reInitialValuee',reInitialValuee);
                setReInitialValues(reInitialValuee);
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
            const response = await CustomerService.update(values,slug);
            console.log("response",response.data.status);
            if(response.data.status){
                toast.success(`${formTitle} updated successfully`);
                navigate(`/agent/customer`)
            }else{
                toast.error(response.data.message);
            }
        }else{
            const response = await CustomerService.create(values);
            console.log("response",response.data.status);
            
            if(response.data.status){
                toast.success(`${formTitle} added successfully`);
                navigate(`/agent/customer`)
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
        
            <AgentLayout />
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
                            <Link to={`/agent/customer`}>My {formTitle}s</Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">{`${formAction} ${formTitle}`}</li>
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
                                    {formTitle} Information
                                    </div>
                                    {/* <div className="prism-toggle">
                                        <button className="btn btn-sm btn-primary-light"><i className="ri-code-line ms-2 d-inline-block align-middle"></i></button>
                                    </div> */}
                                </div>
                                

                                <Formik
                                    initialValues={reInitialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleOnSubmit}
                                    enableReinitialize={true}
                                >
                                    {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                                        <Form ref={nameForm}>
                                            <Card>
                                                <CardContent>
                                                    <Grid container spacing={4}>
                                                        <Grid item xs={4}>
                                                            <InputLabel>Title</InputLabel>
                                                            <TextField
                                                                type="text"
                                                                id="title"
                                                                placeholder="Enter First Name"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.title}
                                                                helperText={touched.title ? errors.title : ""}
                                                                error={touched.title && Boolean(errors.title)} 
                                                            />
                                                            
                                                        </Grid>

                                                        <Grid item xs={4}>
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

                                                        <Grid item xs={4}>
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
                                                            <FormControl>
                                                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                                                <RadioGroup
                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                //defaultValue="male"
                                                                name="gender"
                                                                id="gender"
                                                                //name="controlled-radio-buttons-group"
                                                                value={values.gender}
                                                                helperText={touched.gender ? errors.gender : ""}
                                                                error={touched.gender && Boolean(errors.gender)}
                                                                onChange={handleChange}
                                                                >
                                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                                
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>

                                                        <Grid item xs={6}>
                                                            <InputLabel>Date Of Birth</InputLabel>
                                                            <TextField
                                                                id="dob"
                                                                name='dob'
                                                                type="date"
                                                                placeholder="Enter Passport Number"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.dob}
                                                                helperText={touched.dob ? errors.dob : ""}
                                                                error={touched.dob && Boolean(errors.dob)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <InputLabel>Passport Number</InputLabel>
                                                            <TextField
                                                                id="passport"
                                                                name='passport'
                                                                type="text"
                                                                placeholder="Enter Passport Number"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.passport}
                                                                helperText={touched.passport ? errors.passport : ""}
                                                                error={touched.passport && Boolean(errors.passport)}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={6}>
                                                            <InputLabel>Passport Expiry</InputLabel>
                                                            <TextField
                                                                id="passportExp"
                                                                name='passportExp'
                                                                type="date"
                                                                placeholder="Enter Passport Number"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.passportExp}
                                                                helperText={touched.passportExp ? errors.passportExp : ""}
                                                                error={touched.passportExp && Boolean(errors.passportExp)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Button 
                                                            variant="contained"
                                                            type="submit"
                                                            >Submit</Button>

                                                        </Grid>
                                                    </Grid>
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
