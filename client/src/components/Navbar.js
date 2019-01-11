import React, { Component } from 'react';
import {Animation,MDBAlert} from "mdbreact";
import './Nav.css';
import {Link} from 'react-router-dom';
import {Consumer} from '../context';


class Nav extends Component {
  state = {
      collapseID: ""
    };
  
    toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));


    render() {
      return (
        <Consumer>
          {value => {
            const {alert} = value;
            const alertPrompt = alert ? (
          
              <div className="fixed-top alert-container"> 
                <Animation type="fadeIn">
                  <MDBAlert color={alert.type} >
                   {alert.text}
                  </MDBAlert>
                </Animation>
              </div>
                ): (null)
            return (
              <div className="main">
                <div className="gradient">
                  <div className="fixed-top alert-container"> 
                    <div className="fixed-top alert-container"> 
                      {alertPrompt}
                    </div>
                    </div>
                    <h1 className="title">Music Boxx</h1>
                    <h3 className="title2">Share your music.</h3>
                    <div className="d-flex justify-content-center addcontainer">
                      <Link className="addbutton glow" to={"/addstory"}>Add Post </Link>
                  </div>
                </div>
              </div>
            )
          }}
        </Consumer>
      );
    }
}
export default  Nav;
