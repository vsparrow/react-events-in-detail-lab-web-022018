
import React from 'react'

// This component takes two props: onDelayedClick (a function),
 // and delay (a number).
//   (These props are only passed in the test suite,
//    you will have errors in the browser)
// When the button is clicked, we want to persist the event so we can
//  pass it to the
// this.props.onDelayedClick() in a setTimeout() block.
//The setTimeout() will be set to this.props.delay.
class DelayedButton extends React.Component{
  constructor(props){
    super();
    this.state = {onDelayedClick: props.onDelayedClick, delay: props.delay}
  }
  clicks = (event)=>{
    // const target = e.target
    event.persist()
    // setTimeout(()=>{this.onDelayedClick(event.target)},this.delay)
    // setTimeout(()=>{this.props.onDelayedClick(event.target)},this.props.delay)
    setTimeout(()=>{this.props.onDelayedClick(event)},this.props.delay)
  }

  render(){
    return(

      <button onClick={this.clicks}>CLICK</button>
    )
  }
}

export default DelayedButton
