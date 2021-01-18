import React, { Component } from 'react'

class StatefulComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Welcome to React"
        }
    }
    clickHandler(){
        this.setState(
           {
                name:"Learn More"
            }
        )
    }
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={()=>this.clickHandler()}>Change State</button>
            </div>
        )
    }
}

export default StatefulComponent
