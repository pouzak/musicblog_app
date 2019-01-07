import React, { Component } from 'react';
import UserDetails from './UserDetails';
import ContentDetails from './ContentDetails';
import FileUpload from './FileUpload';
import Success from './Success'


export class UserForm extends Component {

    state = {
        step: 1,
        name: '',
        title: '',
        content: '',
        tags: '',
        image: []
       
    }

    //proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    } 
    //back step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    } 

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
        
    }

    editorChange(value) {
        this.setState({content: value})
    }

    imageUpload(event) {
        this.setState({
            //image: this.state.image.concat(event)
            image: event
        })
    };
  render() {
      const {step} = this.state;
      const {name, title, content, tags, image} = this.state;
      const values = {name, title, content, tags, image};

        switch(step) {
            case 1:
            return (
                <UserDetails
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            )
            case 2:
            return (
                <ContentDetails
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                editorChange = {this.editorChange.bind(this)} // or (e) => this.editorChange(e)
                values = {values}
                />
            )
            case 3:
            return (
                <FileUpload
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                imageUpload = {this.imageUpload.bind(this)}
                values = {values}
                />
            )
            case 4:
                return (
                    <Success values = {values}
                    alert={this.props.alert}/>
                )
            default: 
            return (null)
        }
  }
}

export default UserForm;
