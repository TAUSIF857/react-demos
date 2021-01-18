import React, { Component } from 'react'
import StatePropsChild from './StatePropsChild'

class StateAndProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Tausif"
        }
    }
    
    render() {
        return (
            <div>
                <StatePropsChild stateProps={this.state.name}></StatePropsChild>
            </div>
        )
    }
}

export default StateAndProps
