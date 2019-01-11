import React, { Component } from 'react';
import { Animation, Container, Button } from 'mdbreact';
import UserForm from './AddPost/UserForm';
import {withAlert} from '../context';

class Add extends Component {
  
    change = () => {
        this.props.context.changeAlert('danger','Process canceled!');
        this.props.history.push('/');
      } 
   

  render() {
    return (
      <div style={{paddingTop: '2rem',}}>
      <Container>
        <Animation type="fadeIn" duration="500ms">
          <UserForm />
          <div className="d-flex justify-content-center">
            <Button style={{backgroundColor: "#9b2f2f"}} className="oxygen" color="#9b2f2f" onClick={() => this.change()}>cancel</Button>
          </div>
        </Animation>
      </Container>  
      </div>
    )
  }
}
export default withAlert(Add);

