import React from "react";

import AppContext, {AppProvider} from "../services/contexts/AppContext/AppContext";

import NavMenu from "../NavMenu/NavMenu";

export default class AppContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        
        return (
            <AppProvider navigation={this.props.navigation}>
                <NavMenu/>
            </AppProvider>
        )
    }
}