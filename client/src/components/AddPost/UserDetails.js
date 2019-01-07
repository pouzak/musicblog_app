import React, { Component } from 'react';
import { MDBBtn, MDBInput, MDBBtnGroup } from 'mdbreact';
import './UserForm.css';


export class UserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

  render() {
      const {values, handleChange} = this.props;
      const button = values.name.length > 0 && values.title.length > 0 && values.tags.length > 0  ? ( <MDBBtn color="light-green" onClick={this.continue}>Continue</MDBBtn>) : (null)
    return (
    <React.Fragment>
        <div>
            <h1 className="title-text">Step 1: Enter Your Story Information</h1>
                <MDBInput
                placheolder='Enter your name'
                label='Author:'
                onChange={handleChange('name')}
                value={values.name}/>
                <br/>
                <MDBInput
                placheolder='Enter your Story title'
                label='Story title:'
                onChange={handleChange('title')}
                value={values.title}/>
                <br/>
                <MDBInput
                placheolder='Enter Story tags'
                label='Story tags (words with spaces):'
                onChange={handleChange('tags')}
                value={values.tags}/>
                <br/>
        
            <div className="d-flex justify-content-center">
            <MDBBtnGroup className="oxygen">
        
                {button}
            
            </MDBBtnGroup>
            </div>
        
        </div>
    </React.Fragment>
    )
  }


}
export default UserDetails
