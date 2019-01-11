import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {Animation, MDBJumbotron, MDBContainer, MDBRow, MDBCol, Modal, ModalBody, ModalHeader, ModalFooter, Button  } from "mdbreact";
import './Post.css';
import Parser from 'html-react-parser';
import Moment from 'react-moment';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import {withAlert} from '../context';
import { compose } from 'recompose'
import Spinner from './Spinner';



class Story extends Component {
  state = {
    story: null,
    modal: false,
  }

  componentDidMount(){
    axios
    .get(`/api/post/${this.props.match.params.id}`)
    .then(res => {
      this.setState({story: res.data});
    })
    .catch(err => console.log(err));
  }
 
  deletePost(e){
    axios
    .delete(`/api/del/${e}`)
    .then(res => {
      //this.setState({story: res.data});
      if(res.data.msg) {
        //this.setState({redirect: !this.state.redirect});
        this.props.context.changeAlert("danger",`Post "${this.state.story.title}" DELETED!`);
        this.props.history.goBack();
      }
    })
    
    .catch(err => console.log(err));
  
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
 

  render() {
    const images = this.state.story != null && this.state.story.imageurl.length > 0 ? (
        this.state.story.imageurl.map((img) => {
          return (
            {
              original: img,
              thumbnail: img,
            }
           )
        })
    )  : (
      {
        original: "uploads/no.png",
        thumbnail: "uploads/no.png",
      }
        );

  //<Button color="red" onClick={this.deletePost.bind(this, this.state.story._id)}>delete</Button>
      if(!this.state.story) {
        return <div style={{position: "absolute", left: "0", 
        right: "0", 
        marginLeft: "auto",
        marginRight: "auto", width: "100px"}}><Spinner /></div>
      } else if (this.state.story != null){
        const tags = this.state.story.tags.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } ).map(tag => {return ('#'+tag+' ')})
    return (
      <div >
      <Animation type="fadeIn" duration="500ms">
         <MDBContainer className="mt-5 text-center">
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Are you sure want to delete?</ModalHeader>
            <ModalBody>
              All post data will be lost!
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Close</Button>
              <Button color="red" onClick={this.deletePost.bind(this, this.state.story._id)}>delete</Button>
            </ModalFooter>
          </Modal>

      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="main-body">
            
            <h2 className="title1">{this.state.story.title}</h2>
            <div className="d-flex justify-content-center"> 
            <p className="d-flex justify-content-center font-italic oxygen">Author: {this.state.story.name}</p>
            <p className="float-right font-italic oxygen"> , <Moment format="YYYY-MM-DD HH:mm">{this.state.story.date}</Moment></p>
            </div>
            <div className="pic">
              <ImageGallery items={images}/>
            </div>
            <div className="lead">
              {Parser(this.state.story.content)}
            </div>
            <hr className="my-2" />
            <p>Tags:  <a href="/">{tags}</a>
            </p>
            <div className="lead oxygen">
              <Button color="3c343a"onClick={() => this.props.history.goBack()} className="back-button">Go back</Button>
              <Button color="#9b2f2f" onClick={this.toggle} className="del-button">Delete</Button>
            </div>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </Animation>
      </div>
    ) 
  
  }
}
}
export default compose(withRouter, withAlert)(Story);
