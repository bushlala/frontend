import React from 'react'
//import Header from '../../Component/Header'
//import Sidebar from '../../Component/Admin/Sidebar'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
//import {Link,useNavigate,useParams} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from '../../../Component/Store/Auth';
import {
    Card,
    CardContent,
    Grid,
    InputLabel,
    TextField,
    Button,
} from "@mui/material";

export default function Login() {
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Please enter a valid email address"),
        password: Yup.string()
            .required('Password is required'),
    });
    const initialValues = {
        "email":"",
        "password":"",
    }
    const nameForm = React.useRef(null)
    // Here store apis data
    const [loginInitialValues, setLoginInitialValues] = React.useState(initialValues);
    //const [formTitle, setFormTitle] = React.useState('Login');

    React.useEffect(() => {
        
    }, [])
    const handleOnSubmit = async (values, { resetForm }) => {
        console.log("values",values);
        dispatch(login(values)).then((response)=>{
            console.log(response);
            if(response.status){
                window.location.href = "/agent/dashboard";
            }else{
                toast.error(response.message);
            }
        })
    };
  return (
    <>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
      {/* <Header />
      <Sidebar /> */}
            
        <Formik
            initialValues={loginInitialValues}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
            enableReinitialize={true}
        >
            {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                <Form ref={nameForm}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={4}>
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
                                <Grid item xs={12}>
                                    <Button 
                                        type="submit"
                                        variant="contained"
                                    >Login</Button>
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
