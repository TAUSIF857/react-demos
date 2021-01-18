import React, { Component } from 'react'

class PropsDemo extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default PropsDemo
