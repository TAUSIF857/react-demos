import React, { Component } from 'react'

class StatefulComponentNew extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             display:false
        }
        this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio(){
        this.setState({
            display:!this.state.display            
        })
    }

    render() {
        const isDisplayed=this.state.display?(
            <div>
                <p>Hello</p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
        ):<div>
        
    <button onClick={this.toggleDisplayBio}>Read More</button>
    </div>
        
        return (
            <div>
            {isDisplayed}
        </div>
        )
    }
}

export default StatefulComponentNew
