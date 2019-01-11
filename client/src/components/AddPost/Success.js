import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import {withAlert} from '../../context';
import { compose } from 'recompose';
import Spinner from '../Spinner'

//https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data

export class Success extends Component {
  constructor(props) {
    super(props);
     this.state = {loading: null}
     this.change = this.change.bind(this);
}


change = () => {
  this.props.context.changeAlert('success',`Post "${this.props.values.title}" Created!`);
  //this.props.alert('success',`Post "${this.props.values.title}" Created!`);
  this.setState({loading: null})
  this.props.history.push('/');
  
  
} 

postdata = () => {
  this.setState({loading: 1})
  var that = this;
  const {name, title, content, tags, image} = this.props.values;
  
  var formData = new FormData();
  formData.set('name', name); 
  formData.set('title', title);
  formData.set('content', content);
  formData.set('tags', tags);
  //formData.append('image', image[0]);
  
  if(image.length > 0){
    image.map(img => {
      return formData.append('image', img);
    })
  }
  
  axios({
    method: 'post',
    url: '/api/create',
    headers: {'Content-Type': 'multipart/form-data'},
    data: formData
  }).then(function (response) {
   if(response.statusText === 'OK'){
    that.change();
   } 
  })
  .catch(function (error) {
    console.log(error);
  })
}

  render() {
    const {name, title} = this.props.values; 
    return (

      <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
        <div className="success-main">
          {!this.state.loading ? (
           <React.Fragment>
            <h2 className="title-text-success">That's it, {name}!</h2>
            <p className="lead">
              Your post "{title}" is ready to be published on page!
            </p>
            <hr className="my-2" />
            <p>
              To post it, press button bellow:
            </p>
            <p className="lead">
            <MDBBtn size="lg" color="success" className="formbutt oxygen" onClick={this.postdata}>Post!</MDBBtn>
            
            </p>
         </React.Fragment>
    
          ) : (
            <React.Fragment>
            <h2 className="oxygen">Loading...</h2>
            <div className="lead d-flex justify-content-center">
            <div><Spinner /></div>
            </div>
            <hr className="my-2" />
            </React.Fragment>
          )} 
          </div> 
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      
    )
  }
}

export default compose(withRouter, withAlert)(Success)
