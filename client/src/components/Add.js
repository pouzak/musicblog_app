import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Animation, Container, MDBBtn } from 'mdbreact';
import UserForm from './AddPost/UserForm';

class Add extends Component {
  state = {
    content: null,
    
  }
    change= (alert,txt) => {
        this.props.alert(alert,txt);
        this.props.history.push('/');
        
      } 
      updateContent(newContent) {
        this.setState({
            content: newContent
        })
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

