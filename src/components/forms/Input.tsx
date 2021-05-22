import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { FieldProps } from 'formik'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles';

interface Props extends FieldProps {
    placeholder: string;
    errors: string
}

const useStyles = makeStyles((theme) => ({

    form: {
        width: '100%', // Fix IE 11 issue.
        minWidth: "270px"
    }
}));



const Input: React.FC<Props & TextFieldProps> = ({ placeholder, field, errors, ...rest }) => {
    const classes = useStyles();
    return (
        <div>
            <TextField
                className={classes.form}
                variant="outlined"
                margin="normal"
                required
                {...field}
                {...rest}
            />
            {
                errors ? <Alert severity="error">{errors}</Alert> : ""
            }

        </div>

    )
}

export default Input
