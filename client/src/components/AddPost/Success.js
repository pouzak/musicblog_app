import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

//https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data

export class Success extends Component {
  constructor(props) {
    super(props);
     this.state = {loading: null}
     this.change = this.change.bind(this);
}


change = () => {
  this.props.alert('success',`Post "${this.props.values.title}" Created!`);
  this.props.history.push('/');
  this.setState({loading: null})
  
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
          {!this.state.loading ? (
            <MDBJumbotron>
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
          </MDBJumbotron>
    
          ) : (<MDBJumbotron>
            <h2 className="h1 display-3 oxygen">Loading...</h2>
            <div className="lead d-flex justify-content-center">
            <div className="loader"></div>
            </div>
            <hr className="my-2" />

          </MDBJumbotron>)}  
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      
    )
  }
}

export default withRouter(Success)
