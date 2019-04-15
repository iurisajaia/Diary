
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { MyContext } from '../../state/State';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FacebookLogin from "react-facebook-login";

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
                            <form className="registration-form" onSubmit={context.hadleLogin}>
                                <TextField
                                    id="loginEmail"
                                    className={classNames(classes.margin, classes.textField)}
                                    variant="outlined"
                                    label="ელ.ფოსტა"
                                    onChange={handleChange('email')}
                                />
                                <TextField
                                    id="loginPassword"
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
                                        შესვლა
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
                                        <a href="/">მთავარი</a> / <a href="/registration">რეგისტრაცია</a>
                                    </p>
                                </div>


                            </form>
                            <div className="text-center mt-2">
                                <FacebookLogin
                                    appId="652531571871133"
                                    cookie={true}
                                    xfbml={true}
                                    version='2.8'
                                    autoLoad={false}
                                    fields="name,email,friends,picture"
                                    scope="public_profile,email,user_friends"
                                    disableMobileRedirect={true}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </MyContext.Consumer>
    );
}

export default OutlinedInputAdornments;