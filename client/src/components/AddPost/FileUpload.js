import React, { Component } from 'react';
import {Button,MDBBtnGroup  } from 'mdbreact';
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
           {values.image.length > 0 ? (<Button className="continue-button" color="" onClick={this.continue}>Continue</Button>) : (null)}
           <Button color="" className="back-button"onClick={this.back}>back</Button>
            </MDBBtnGroup>
            </div>
      </div>
    );
  }
}
export default FileUpload
