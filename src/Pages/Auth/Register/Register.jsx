import React from 'react'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { AuthAPI } from '../../../Services/Auth.Service';
import { CommonService } from '../../../Services/Common/Common.Service';
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import './Register.css';
import {
    Card,
    CardContent,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Button,
    Box,
    Link
} from "@mui/material";

export default function Register() {
    const navigate = useNavigate();
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
            .required('Password is required3')
            .min(8,"Password must be at least 8 characters."),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        panNumber: Yup.string()
                .min(10,"Pan number must be at least 10 characters.")
                .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Please enter valid pan number'),
        
            //.email('Mobile number email address'),
    });
    // Here init value of from
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
    //const [agendInitialValues, setAgendInitialValues] = React.useState(initialValues);
    const [countryList, setCountryList] = React.useState([]);
    const [stateList, setStateList] = React.useState([]);
    const [cityList, setCityList] = React.useState([]);
    //const [formTitle, setFormTitle] = React.useState('Agent Registration');
    const formTitle = "Agent Registration";

    React.useEffect(() => {
        getAllCountry();
    }, [])

    const getAllCountry = async () =>{
        CommonService.getAllCountry().then((response)=>{
            if(response.status === 200){
                if(response.data.status){
                    if(response.data.data.rows && response.data.data.rows.length){
                        const rows = response.data.data.rows;
                        //console.log("rows",rows);
                        const country = rows[0];
                        getAllState(country.id,null);
                        setCountryList(rows);
                    }
                    
                }else{
                    toast.error(`CountryApi:${response.data.message}`);
                }
            }
        }).catch((error) =>{
            toast.error("CountryApi:Something went wrong");
        })
    }

    const handleChangeCountry = (event, setFieldValue) => {
        const countryId = event.target.value
        setFieldValue('countryId', countryId);
        getAllState(countryId, setFieldValue);
        //getStates(countryCode, 'state_issue_dl', setFieldValue);
    }

    const getAllState = async (countryId,setFieldValue) =>{
        CommonService.getAllState(countryId).then((response)=>{
            if(response.status === 200){
                if(response.data.status){
                    if(response.data.data.rows && response.data.data.rows.length){
                        const rows = response.data.data.rows;
                        //console.log("rows",rows);
                        const state = rows[0];
                        getAllCity(state.id,null);
                        setStateList(rows);
                    }
                }else{
                    toast.error(`StateApi:${response.data.message}`);
                }
            }
        }).catch((error) =>{
            toast.error("StateApi:Something went wrong");
        })
    }

    const handleChangeState = (event, setFieldValue) => {
        const stateId = event.target.value
        setFieldValue('stateId', stateId);
        getAllCity(stateId, setFieldValue);
        //getStates(countryCode, 'state_issue_dl', setFieldValue);
    }

    const getAllCity = async (stateId) =>{
        CommonService.getAllCity(stateId).then((response)=>{
            if(response.status === 200){
                if(response.data.status){
                    if(response.data.data.rows && response.data.data.rows.length){
                        const rows = response.data.data.rows;
                        //console.log("rows",rows);
                        setCityList(rows);
                    }
                }else{
                    toast.error(`CityApi:${response.data.message}`);
                }
            }
        }).catch((error) =>{
            toast.error("CityApi:Something went wrong");
        })
    }

    const handleOnSubmit = async (values, { resetForm }) => {
        console.log("reguest",values);
        const response = await AuthAPI.agentRegister(values);
        console.log("response",response);
        if(response.status){
            toast.success('Registeration successfully');
            navigate(`/login`)
        }else{
            toast.error(response.message);
        }
    };
  return (
    <>
        <div className='register'>
            <div className="container">
                <div className='col-5 m-auto'>
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                    />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={agendValidationSchema}
                        onSubmit={handleOnSubmit}
                        enableReinitialize={true}
                    >
                        {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                            <Form ref={nameForm}>
                                <Card>
                                    <CardContent> 
                                        <div className='p-2'>
                                            <Box className="mb-4 login-header">
                                                <Typography className='text-theme' variant="" component="h4"
                                                >
                                                    {formTitle}
                                                </Typography>
                                            </Box>
                                            <Grid container spacing={1}>

                                                <Grid item xs={6}>
                                                    <InputLabel className='form-label'>First Name</InputLabel>
                                                    <TextField
                                                        className=""
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
                                                    <InputLabel className='form-label'>Last Name</InputLabel>
                                                    <TextField
                                                        className=''
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
                                                    <InputLabel className='form-label'>Mobile Number</InputLabel>
                                                    <TextField
                                                        className=''
                                                        id="mobileNumber"
                                                        type="text"
                                                        placeholder="Enter Mobile Number"
                                                        fullWidth
                                                        onChange={handleChange}
                                                        value={values.mobileNumber}
                                                        helperText={touched.mobileNumber ? errors.mobileNumber : ""}
                                                        error={touched.mobileNumber && Boolean(errors.mobileNumber)}
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <InputLabel className='form-label'>Email</InputLabel>
                                                    <TextField
                                                        className=''
                                                        id="email"
                                                        type="text"
                                                        placeholder="Enter Email"
                                                        fullWidth
                                                        onChange={handleChange}
                                                        value={values.email}
                                                        helperText={touched.email ? errors.email : ""}
                                                        error={touched.email && Boolean(errors.email)}
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <InputLabel className='form-label'>Password</InputLabel>
                                                    <TextField
                                                        className=''
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
                                                    <InputLabel className='form-label'>Confirm Password</InputLabel>
                                                    <TextField
                                                        className=''
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
                                                    <InputLabel className='form-label'>Address</InputLabel>
                                                    <TextField
                                                        className=''
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
                                            <InputLabel className='form-label'>Country</InputLabel>
                                            <Select
                                                id="countryId"
                                                name="countryId"
                                                fullWidth
                                                //onChange={handleChange}
                                                onChange={(e) => {
                                                    handleChangeCountry(e, setFieldValue);
                                                }}
                                                value={values.countryId}
                                                helperText={touched.countryId ? errors.countryId : ""}
                                                error={touched.countryId && Boolean(errors.countryId)}
                                            >
                                                {
                                                    countryList && countryList.map((value, key) => (
                                                        <MenuItem key={key} value={value.id}>{value.name}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <InputLabel className='form-label'>State</InputLabel>
                                            <Select
                                                id="stateId"
                                                name="stateId"
                                                fullWidth
                                                onChange={(e) => {
                                                    handleChangeState(e, setFieldValue);
                                                }}
                                                value={values.stateId}
                                                helperText={touched.stateId ? errors.stateId : ""}
                                                error={touched.stateId && Boolean(errors.stateId)}
                                            >
                                                {
                                                    stateList && stateList.map((value, key) => (
                                                        <MenuItem key={key} value={value.id}>{value.name}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <InputLabel className='form-label'>City</InputLabel>
                                            <Select
                                                id="cityId"
                                                name="cityId"
                                                fullWidth
                                                onChange={handleChange}
                                                value={values.cityId}
                                                helperText={touched.cityId ? errors.cityId : ""}
                                                error={touched.cityId && Boolean(errors.cityId)}
                                            >
                                                {
                                                    cityList && cityList.map((value, key) => (
                                                        <MenuItem key={key} value={value.id}>{value.name}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <InputLabel className='form-label'>Company Name</InputLabel>
                                            <TextField
                                                className=''
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
                                            <InputLabel className='form-label'>Pan Number</InputLabel>
                                            <TextField
                                                className=''
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
                                            <InputLabel className='form-label'>Business Type</InputLabel>
                                            <TextField
                                                className=''
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
                                            <InputLabel className='form-label'>GST Number</InputLabel>
                                            <TextField
                                                className=''
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
                                            <InputLabel className='form-label'>Website</InputLabel>
                                            <TextField
                                                className=''
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
                                        <Grid item xs={12} className='mt-3 text-center'>
                                                    
                                                <Button 
                                                    className='btn-theme col-5'
                                                    type="submit"
                                                    variant="contained"
                                                >Submit</Button>
                                                
                                            <p className='already-login'>Already a Member? <Link to={`/Login`} className='text-theme'>Login </Link></p>
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
    </>
  )
}
