import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';


import { MyContext } from '../../../state/State';


function Transition(props) {
    return <Slide direction="up" {...props} />;
}


function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <MyContext.Consumer>
            {context => (
                <>
                    <div className="modal-box">
                        <Fab color="primary" aria-label="Add" onClick={handleClickOpen} >
                            <AddIcon />
                        </Fab>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title">{"დაამატე შეკითხვა დღიურში"}</DialogTitle>


                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">

                                    <form className="question-form" onSubmit={context.addQuestionToDiary}>

                                        <TextField
                                            id="question"
                                            label="შეკითხვა"
                                            margin="normal"
                                            variant="outlined"
                                        />

                                        <div className="text-center">
                                            <Button type="submit" variant="contained" color="primary">
                                                დამატება
                                <Icon className="ml-2">send</Icon>
                                            </Button>
                                        </div>
                                    </form>
                                </DialogContentText>


                            </DialogContent>


                            <DialogActions>

                                <Button onClick={handleClose} color="primary">
                                    დახურვა
                    </Button>

                            </DialogActions>

                        </Dialog>
                    </div>

                </>
            )}
        </MyContext.Consumer>
    );
}

export default AlertDialogSlide;