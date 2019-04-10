
import React from 'react';
import classNames from 'classnames';
import { MyContext } from '../../state/State';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
}));


function OutlinedInputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    return (
        <MyContext.Consumer>
            {context => (
                <>
                    <div className="container mt-5">
                        <form className="registration-form" onSubmit={context.handleRegistration}>
                            <TextField
                                id="firstname"
                                className={classNames(classes.margin, classes.textField)}
                                variant="outlined"
                                label="სახელი"
                                onChange={handleChange('firstname')}

                            />

                            <TextField
                                id="lastname"
                                className={classNames(classes.margin, classes.textField)}
                                variant="outlined"
                                label="გვარი"
                                onChange={handleChange('lastname')}

                            />

                            <TextField
                                id="email"
                                className={classNames(classes.margin, classes.textField)}
                                variant="outlined"
                                label="ელ.ფოსტა"
                                onChange={handleChange('email')}

                            />
                            <TextField
                                id="password"
                                className={classNames(classes.margin, classes.textField)}
                                variant="outlined"
                                type={values.showPassword ? 'text' : 'password'}
                                label="პაროლი"
                                onChange={handleChange('password')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button type="submit" variant="contained" color="primary" className="registration-button">
                                რეგისტრაცია
      </Button>
                        </form>
                    </div>
                </>
            )}
        </MyContext.Consumer>
    );
}

export default OutlinedInputAdornments;