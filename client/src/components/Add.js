import React, { Component } from 'react';
import { Animation, Container, MDBBtn } from 'mdbreact';
import UserForm from './AddPost/UserForm';

class Add extends Component {
  
    change = (alert,txt) => {
        this.props.alert(alert,txt);
        this.props.history.push('/');
        
      } 
   

  render() {
    return (
      <div style={{paddingTop: '2rem',}}>
      <Container>
        <Animation type="fadeIn" duration="500ms">
          <UserForm alert={this.props.alert}/>
          <div className="d-flex justify-content-center">
            <MDBBtn className="oxygen" color="red" onClick={() => this.change('danger','Process canceled!')}>cancel</MDBBtn>
          </div>
        </Animation>
      </Container>  
      </div>
    )
  }
}
export default Add;

