import React from 'react'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { AuthAPI } from '../../../Services/Auth.Service';
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
    Typography,
    Button
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
                .min(10,"Pan number must be at least 10 characters."),
        
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
    const [agendInitialValues, setAgendInitialValues] = React.useState(initialValues);
    const [formTitle, setFormTitle] = React.useState('Agent Registration');

    React.useEffect(() => {
        
    }, [])
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
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <Formik
            initialValues={agendInitialValues}
            validationSchema={agendValidationSchema}
            onSubmit={handleOnSubmit}
            enableReinitialize={true}
        >
            {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                <Form ref={nameForm}>
                    <Card>
                    <Typography 
                        variant="h4" 
                        component="h2"
                    >
                        {formTitle}
                    </Typography>

                        <CardContent> 
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
                                        helperText={touched.mobileNumber ? errors.mobileNumber : ""}
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
                                        helperText={touched.email ? errors.email : ""}
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
                                    <Button 
                                        type="submit"
                                        variant="contained"
                                    >Submit</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Form>
            )}
        </Formik>             
    </>
  )
}
