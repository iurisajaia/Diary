import React from 'react';
import classNames from 'classnames';
import { MyContext } from '../../../state/State'
import { makeStyles, useTheme } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from '@material-ui/core/Avatar';



import QuestionsList from './list'
import Modal from './modal'
import AsideSection from './drawer'
import Friends from './friends';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    tabroot: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));





function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }




    return (
        <MyContext.Consumer>
            {context => (
                <>
                    <div className={classes.root}>
                        <CssBaseline />

                        <AppBar
                            position="fixed"
                            className={classNames(classes.appBar, {
                                [classes.appBarShift]: open,
                            })}
                        >
                            <Toolbar disableGutters={!open}>
                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={handleDrawerOpen}
                                    className={classNames(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <div className="flex">
                                    <Avatar alt="Remy Sharp" src="https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/56340115_774556886259978_7983333524444807168_n.jpg?_nc_cat=110&_nc_ht=scontent.ftbs6-1.fna&oh=94412567c9287289ec44f224a43e20a5&oe=5D4EC847" className="mr-3 ml-2" />
                                    <Typography variant="h6" color="inherit" noWrap>
                                        {context.state.user ? (
                                            <>
                                                {context.state.user.firstname} {context.state.user.lastname}

                                            </>
                                        ) : <p>სახელი გვარი</p>}
                                    </Typography>
                                </div>
                            </Toolbar>
                        </AppBar>

                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="left"
                            open={open}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </div>
                            <Divider />


                            <Divider />

                            <AsideSection />
                        </Drawer>

                        <main
                            className={classNames(classes.content, {
                                [classes.contentShift]: open,
                            })}
                        >

                            <div className={classes.drawerHeader} />

                            {/* <Modal  /> */}

                            <div id="tab-1" className="tab-content current">
                                <QuestionsList />
                            </div>
                            <div id="tab-2" className="tab-content">
                                <Friends />
                            </div>

                        </main>
                    </div>

                </>
            )}
        </MyContext.Consumer>
    );
}

export default PersistentDrawerLeft;