import React from 'react';
import { MyContext } from '../../../state/State';

function AsideSection(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <>
                    <ul className="tabs">

                        <li className="custom-navigation tab-link current" data-tab="tab-1"> კითხვები</li>
                        <li className="custom-navigation tab-link" data-tab="tab-2" > მეგობრები</li>
                        <li className="custom-navigation">
                            <a href={`http://localhost:3000/diary/${context.state.user._id}`} target="_blank">ჩემი დღიური </a></li>
                    </ul>
                </>
            )}
        </MyContext.Consumer>

    );
}

export default AsideSection;