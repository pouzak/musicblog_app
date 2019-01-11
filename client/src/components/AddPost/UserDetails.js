import React, { Component } from 'react';
import { Button, MDBInput, MDBBtnGroup } from 'mdbreact';
import './UserForm.css';
import {withAlert} from '../../context';

export class UserDetails extends Component {

    continue = e => {
        e.preventDefault();
        if(this.props.values.name.length > 0 && this.props.values.title.length > 0 && this.props.values.tags.length> 0){
            this.props.nextStep();
        } else {
            this.props.context.changeAlert("info","Please fill all fields!");
        }
        
    }

  render() {
      const {values, handleChange} = this.props;
      //const button = values.name.length > 0 && values.title.length > 0 && values.tags.length > 0  ? ( <MDBBtn color="light-green" onClick={this.continue}>Continue</MDBBtn>) : (null)
    return (
    <React.Fragment>
        <div className="oxygen">
            <h1 className="title-text">Step 1: Enter post information</h1>
                <MDBInput
                placheolder='Enter your name'
                label='Author:'
                onChange={handleChange('name')}
                value={values.name}
                maxLength="35"
                style={{color: "white"}} />
                <br/>
                <MDBInput
                placheolder='title'
                label='Post title:'
                onChange={handleChange('title')}
                value={values.title}
                maxLength="45"
                style={{color: "white"}}/>
                <br/>
                <MDBInput
                placheolder='post tags'
                label='Post tags (words with spaces):'
                onChange={handleChange('tags')}
                value={values.tags}
                maxLength="30"
                style={{color: "white"}}/>
                <br/>
        
            <div className="d-flex justify-content-center">
            <MDBBtnGroup className="oxygen">
        
            <Button className="continue-button" color="" onClick={this.continue}>Continue</Button>
            
            </MDBBtnGroup>
            </div>
        
        </div>
    </React.Fragment>
    )
  }


}
export default withAlert(UserDetails)
