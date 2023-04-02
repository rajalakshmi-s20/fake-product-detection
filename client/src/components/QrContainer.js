import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import './QrContainer.css';

class QrContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            result: 'Hold QR Code Steady and Clear to scan',
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(result){
        this.setState({
            //result: data
        })
    }

    handleError(err)
    {
        console.error(err)
    }

    render(){
        const previewStyle = {
            height: 700,
            width: 1000,
            display: 'flex',
            "justify-content": "center"
        }

        const camstyle = {
            display: 'flex',
            justifyContent: "center",
            marginTop: '-50px'
        }

        const textStyle = {
            fontSize: '30px',
            "text-align": 'center',
            marginTop: '-50px'
        }

        return(
            <React.Fragment>
                <div style = {camstyle}>
                    <QrReader
                        delay={100}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </div>
                <p style = {textStyle}>
                    {this.state.result}
                </p>
            </React.Fragment>
        )
    }
}

export default QrContainer;