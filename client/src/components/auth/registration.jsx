
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
                    <div className="hero center-box">
                        <div className="container">
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
                                <div className="text-center">
                                    <Button type="submit" variant="contained" color="primary" className="registration-button">
                                        რეგისტრაცია
      </Button>
                                </div>

                                {context.state.errors ? (
                                    <div className="alerts mt-2">
                                        <div className="custom-alert_danger p-3 text-center">{context.state.errors}</div>
                                    </div>
                                ) : null}

                                {context.state.success ? (
                                    <div className="alerts mt-2">
                                        <div className="custom-alert_success p-3 text-center">{context.state.success}</div>
                                    </div>
                                ) : null}


                                <div className="text-center ">
                                    <p className="lead">
                                        <a href="/">მთავარი</a> / <a href="/login">ავტორიზაცია</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                </>
            )}
        </MyContext.Consumer>
    );
}

export default OutlinedInputAdornments;