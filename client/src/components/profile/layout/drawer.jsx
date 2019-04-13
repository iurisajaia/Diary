import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import event from "event-module";
import { MyContext } from '../../../state/State';
import { lookupService } from 'dns';


function AsideSection(props) {
    var e;
    return (
        <MyContext.Consumer>
            {context => (
                <>
                    <ul className="tabs">

                        <li button className="custom-navigation tab-link current" data-tab="tab-1"> კითხვები</li>
                        <li button className="custom-navigation tab-link" data-tab="tab-2" > მეგობრები</li>
                        <li button className="custom-navigation tab-link" data-tab="tab-3" > დღიური</li>
                    </ul>
                </>
            )}
        </MyContext.Consumer>

    );
}

export default AsideSection;