import React, { Component } from 'react'
import StatePropsChild from './StatePropsChild'

class ChangeComponentOnNewProps extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            name:'TP'
        }
    }
    clickHandler(){
        console.log(this.props.changeComp);
        this.setState({
            name:this.props.changeComp
        })
    }
    
    render() {
        
        return (
            <div>
                <p>Hello</p>
                <button onClick={()=>this.clickHandler()}>Click to change</button>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default ChangeComponentOnNewProps
