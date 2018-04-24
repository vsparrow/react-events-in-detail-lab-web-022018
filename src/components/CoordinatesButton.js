
// This component takes in one prop: onReceiveCoordinates.
//   This prop is a function. (This props is only passed in the test suite,
//     you will have errors in the browser)
// When the button is clicked, create an array with two elements:
//   the X and Y coordinates of the mouse. Find these using the event data.
// The onReceiveCoordinates callback prop is then called with these coordinates.
import React from 'react'

class CoordinatesButton extends React.Component{
  // constructor(props){
  //   super()
  //   //onReceiveCoordinates in props   this.props.onReceiveCoordinates
  // }
  findEvent = (event)=>{
    // const target  = event.target
    event.persist()
    // console.log(event);
    // console.log(event.["[[Target]]"].clientX);
    // console.log(event.clientX); //works
    // console.log(event.target.clientX + " " + event.target.clientY);
    // this.props.onReceiveCoordinates
    const coordinates = [event.clientX,event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }
  render(){
    return(
      <button onClick={this.findEvent}>CoordinatesButton</button>
    )
  }
}
export default CoordinatesButton
