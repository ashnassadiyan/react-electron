import React from 'react'
import Container from '@material-ui/core/Container';
import Input from '../../components/forms/Input'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
        marginTop: theme.spacing(1),
        minWidth: '450px',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const CreateDeparment: React.FC = () => {
    const initialValues = {
        name: ""
    }

    const validationSchema = yup.object({
        name: yup.string().required("required").min(5, 'min 5').max(20, 'max 20')
    })

    const onSubmit = async (values: any) => {
        console.log(values)
    }

    const classes = useStyles();

    return (
        <div>
            <Container>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {
                        ({ values, handleChange, handleBlur, errors }) => (
                            <Form className={classes.form}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Field name="name" component={Input} placeholder="name" label="dep name" errors={errors.name} type="text" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} lg={3}>
                                        <Field name="name" component={Input} placeholder="name" label="dep name" errors={errors.name} type="text" />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                            </Form>
                        )
                    }
                </Formik>
            </Container>
        </div >
    )
}

export default CreateDeparment
