import React, {Component} from "react"

class CoordinatesButton extends Component{
 //When the event is triggered 
 //Create an array with two elements: the X and Y coordinates of the mouse
 //Invoke the onReceiveCoordinates callback function that was passed to
 //CoordinatesButton Component as a prop
 // This will log the current x,y position of your mouse to the console
    handleClick = (event) => { 
        const coordinatesArray = [event.clientX, event.clientY]
        return this.props.onReceiveCoordinates(coordinatesArray)}
  
//Render a button that listens for a click event        
    render(){
        return(
            <button onClick={this.handleClick}>
            Coordinates
            </button>
        )
    }
}

export default CoordinatesButton;