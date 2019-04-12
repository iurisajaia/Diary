import React from 'react';
import Modal from './modal'
import { makeStyles } from '@material-ui/styles';
import { MyContext } from '../../../state/State';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';;





const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function SwitchListSecondary() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['Bluetooth']);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <MyContext.Consumer>
            {context => (
                <>
                    <div className="container">
                        <Modal />
                        <div className="text-center">
                            <h2 className="section-title">კითხვები</h2>
                        </div>
                        <List className="questions-list">

                            {context.state.questions.length > 0 ? (
                                <>
                                    {context.state.questions.map(question => {
                                        return (
                                            <ListItem button key={question} >

                                                <ListItemText primary={question} />
                                                <ListItemSecondaryAction>
                                                    <DeleteIcon className="remove-icon" onClick={context.removeQuestion} data-question={question} />
                                                </ListItemSecondaryAction>
                                            </ListItem>

                                        )
                                    })}
                                </>
                            ) : <> <p className="custom-alert_danger">შეკითხვები არ არის</p> </>}







                        </List>
                    </div>

                </>
            )}
        </MyContext.Consumer>
    );
}

export default SwitchListSecondary;