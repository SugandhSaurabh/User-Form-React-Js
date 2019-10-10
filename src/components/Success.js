import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();

    }
    render() {
       
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Submission Successful" />
                        <h1>Thank you for your submission. We have recorded your data.</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Success
