import React, { Component } from 'react';
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







class Layout extends Component {
    state = {}
    render() {

        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        {context.state.user ? (
                            <>
                                <div >
                                    <CssBaseline />

                                    <AppBar
                                        position="fixed"

                                    >
                                        <Toolbar >
                                            <IconButton
                                                color="inherit"
                                                aria-label="Open drawer"


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

                                        variant="persistent"
                                        anchor="left"
                                       
                                       
                                    >
                                        <div>
                                            <IconButton >
                                                
                                            </IconButton>
                                        </div>
                                        <Divider />


                                        <Divider />

                                        <AsideSection />
                                    </Drawer>

                                    <main

                                    >

                                        <div />

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
                        ) : <p>სამწუხაროდ თქვენ არ ხართ ავტორიზებული</p>}
                    </>
                )}
            </MyContext.Consumer>
        );
    }






}

export default Layout;