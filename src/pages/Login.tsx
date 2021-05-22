import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { userActionCreators } from '../store/Actions/action-Creators'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { Form, Formik, Field } from 'formik'
import axios from 'axios'
import Loading from '../components/Loading'
import * as yup from 'yup'
import Input from '../components/forms/Input'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login: React.FC = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const { UserSignIn } = bindActionCreators(userActionCreators, dispatch)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [failed, setfailed] = React.useState<boolean>(false)


    const initialValues = {
        email: "",
        password: ""
    }

    const onSubmit = async (values: any) => {
        setfailed(false)
        setLoading(true)
        await axios.post('http://localhost:9000/loginuser', {
            data: values
        }).then(res => {
            setLoading(false)
            UserSignIn(res.data.token)
        }).catch(res => {
            setLoading(false)
            setfailed(true)
        })
    }



    const validationSchema = yup.object({
        email: yup.string().email('invalid email').required('Email required'),
        password: yup.string().required('password required').min(3, 'min 3').max(15, 'max 15')
    })

    const classes = useStyles();
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Sign in</Typography>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {
                            ({ values, handleChange, handleBlur, errors }) => (
                                <Form>
                                    <div className={classes.form}>
                                        <Field name="email" errors={errors.email} component={Input} label={"Email"} type="email" />
                                        <Field name="password" errors={errors.password} component={Input} label={"Password"} type="password" />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                        >
                                            Sign In
                                        </Button>
                                        <Grid container>

                                            <Grid item>
                                                <Button onClick={() => UserSignIn("guest")} >
                                                    {"Don't have an account? Sign Up"}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                    < Loading isLoading={loading} isFailed={failed} />
                </div>
            </Container>
        </div>
    )
}

export default Login
