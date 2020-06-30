import React, {Component} from "react"

class DelayedButton extends Component{
//When the event is triggered 
//Call setTimeout() whose 2 arguments will be taken from the props passed to DelayedButton
//Call event.persist() to prevent the event object from immediately resetting
    handleClick = (event) => {
        event.persist()
        return window.setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

//Render a button that listens for a click event
    render(){
        return(
            <button onClick={this.handleClick}>
            Delayed Button
            </button>
        )
    }
}

export default DelayedButton;