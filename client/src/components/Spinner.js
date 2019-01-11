import React, { Component } from 'react';
import './Spinner.css'

class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
      </div>
    )
  }
}
export default Spinner;
