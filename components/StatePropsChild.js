import React, { Component } from 'react'
import ChangeComponentOnNewProps from './ChangeComponentOnNewProps'
class StatePropsChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Tausif'
        }
    }
    
    render() {
        return (
            <div>
                Welcome {this.props.stateProps}
                <ChangeComponentOnNewProps changeComp={this.state.name}></ChangeComponentOnNewProps>
            </div>
        )
    }
}

export default StatePropsChild
