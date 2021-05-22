import React from 'react'
import * as yup from 'yup'
import { Form, Formik, Field } from 'formik'
import Input from '../components/forms/Input'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from '../Axios'
import { userActionCreators } from '../store/Actions/action-Creators'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

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

const RegisterScreen: React.FC = () => {

    const dispatch = useDispatch()
    const { UserLogOut } = bindActionCreators(userActionCreators, dispatch)

    const initialValues = {
        email: "",
        password: "",
        name: ""
    }

    const validationSchema = yup.object({
        email: yup.string().email('invalid email').required('required'),
        password: yup.string().required("required").min(5, 'min 5').max(20, 'max 20'),
        name: yup.string().required("required").min(5, 'min 5').max(25, 'max 25')
    })

    const onSubmit = async (values: any) => {
        await axios.post('/login/create', {
            data: values
        }).then(res => {
            UserLogOut()
        }).catch(res => {
            alert('failed')
        })
    }
    const classes = useStyles();

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {
                        ({ values, handleChange, handleBlur, errors }) => (
                            <Form>
                                <div className={classes.form}>
                                    <Field name="name" errors={errors.name} component={Input} label={"Name"} type="name" />
                                    <Field name="email" errors={errors.email} component={Input} label={"Email"} type="email" />
                                    <Field name="password" errors={errors.password} component={Input} label={"Password"} type="password" />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Create Account
                                        </Button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </Container>

        </div>
    )
}

export default RegisterScreen
