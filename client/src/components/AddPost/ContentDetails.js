import React, { Component } from 'react';
import { MDBBtn,MDBBtnGroup } from 'mdbreact';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class ContentDetails extends Component {


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const {values, editorChange} = this.props;
      //console.log(values.content)
      //handleChange('content',this.state.text)
      ContentDetails.modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
           {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'video'],
          ['clean']
        ]
      }
    return (
        <React.Fragment>
            <div className="editor-cont">
                <h1 className="title-text cont-title">Step 2: Enter your Story content</h1>
              
                <ReactQuill  
                value={values.content}
                    onChange={editorChange}
                    placeholder={"Enter your story here"}
                    modules={ContentDetails.modules} >
                    
                </ReactQuill>
           
                <br/>

                <div className="d-flex justify-content-center mobile-container">
                    <MDBBtnGroup className="oxygen">
                    {values.content.length > 0 ? ( <MDBBtn color="light-green" onClick={this.continue}>Continue</MDBBtn>) : (null)}
            
                    <MDBBtn color="light-blue" onClick={this.back}>back</MDBBtn>
                    </MDBBtnGroup>
                    </div>
                </div>
            </React.Fragment>
    )
  }
}

export default ContentDetails
