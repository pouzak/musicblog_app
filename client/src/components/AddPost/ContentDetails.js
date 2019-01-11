import React, { Component } from 'react';
import { Button ,MDBBtnGroup } from 'mdbreact';
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
          ['link','video'],
          ['clean']
        ]
      }
    return (
        <React.Fragment>
            <div className="editor-cont">
                <h1 className="title-text cont-title">Step 2: Enter your content</h1>
              <div className="ql-main">
                <ReactQuill  
                value={values.content}
                    onChange={editorChange}
                    placeholder={"Type something awesome here..."}
                    modules={ContentDetails.modules}>
                    
                </ReactQuill>
           </div>
                <br/>

                <div className="d-flex justify-content-center mobile-container">
                    <MDBBtnGroup className="oxygen">
                    {values.content.length > 0 ? ( <Button className="continue-button" color="" onClick={this.continue}>Continue</Button>) : (null)}
            
                    <Button color="" className="back-button"onClick={this.back}>back</Button>
                    </MDBBtnGroup>
                    </div>
                </div>
            </React.Fragment>
    )
  }
}

export default ContentDetails
