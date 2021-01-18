import React, { Component } from 'react'

class JsxStyling extends Component {
    render() {
        var myStyle = {  
            fontSize: 30,  
            fontFamily: 'Courier',  
            color: 'orange'  
         }  
        return (
            <div>
                <h1 style = {myStyle}>Hello world</h1>  
            </div>
        )
    }
}

export default JsxStyling
