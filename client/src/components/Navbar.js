import React, { Component } from 'react';
import {Animation,MDBAlert} from "mdbreact";
import './Nav.css';
import {Link} from 'react-router-dom';



class Nav extends Component {
    state = {
        collapseID: ""
      };
    
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));


    
      render() {
        const alert = this.props.alert ? (
          
        <div className="fixed-top alert-container"> 
          <Animation type="fadeIn">
            <MDBAlert color={this.props.alert.type} >
             {this.props.alert.text}
            </MDBAlert>
          </Animation>
        </div>
          ): (null)

        return (
          <div className="main">
          <div className="gradient">
          
            {alert}
      
            <h1 className="title">Story Book</h1>
            <h3 className="title2">Share your daily stories.</h3>
            <div className="d-flex justify-content-center addcontainer">
            <Link className="addbutton glow" to={"/addstory"}>
              Add story
              </Link>
              
                </div>
          </div>
          </div>
        );
      }
}

export default  Nav;
