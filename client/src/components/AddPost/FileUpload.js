import React, { Component } from 'react';
import {MDBBtn,MDBBtnGroup  } from 'mdbreact';
import ImageUploader from 'react-images-upload';


export class FileUpload extends Component {

    continue = e => {
        e.preventDefault();
        //process form to back-end//
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
}

onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture)
    });
    
}
  render() {
   
        const {values, imageUpload} = this.props;
        
    return (
      <div>
        <h1 className="title-text">Step 3: Select images to upload:</h1>
        <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={imageUpload}
                imgExtension={['.jpg','.jpeg' ,'.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />
             <div className="d-flex justify-content-center">
           <MDBBtnGroup className="oxygen">
           {values.image.length > 0 ? ( <MDBBtn color="light-green" onClick={this.continue}>Continue</MDBBtn>) : (null)}
              <MDBBtn color="light-blue" onClick={this.back}>back</MDBBtn>
            </MDBBtnGroup>
            </div>
      </div>
    );
  }
}
export default FileUpload
