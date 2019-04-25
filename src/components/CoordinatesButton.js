// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {


clickHandle = (event) => {
  {this.props.onReceiveCoordinates([event.clientX, event.clientY])}
}

render() {
  return (
    <button onClick = {this.clickHandle}></button>
  )
}

}

export default CoordinatesButton;
