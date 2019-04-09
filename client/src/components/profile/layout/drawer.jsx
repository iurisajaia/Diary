import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import event from "event-module";
import { MyContext } from '../../../state/State';


function AsideSection(props) {
    var e;
    return (
        <MyContext.Consumer>
            {context => (
                <>
                    <List className="tabs">

                        <ListItem button className="custom-navigation tab-link current" data-tab="tab-1"> <i className="fas fa-angle-double-right"></i>დღიური</ListItem>
                        <ListItem button className="custom-navigation tab-link" data-tab="tab-2" > <i className="fas fa-angle-double-right"></i>მეგობრები</ListItem>

                    </List>
                </>
            )}
        </MyContext.Consumer>

    );
}

export default AsideSection;