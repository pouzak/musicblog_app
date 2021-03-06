import React, { Component } from 'react';
import List from './List';
import {MDBContainer,MDBRow, FormInline, Col, Container, Fa } from "mdbreact";
import axios from 'axios';
import Spinner from './Spinner';


 class Dashboard extends Component {
  state = {
    itemsList: null,
    query: '',
    filteredList: null
  }
  componentDidMount(){
    axios
    .get('/api/posts')
    .then(res => {
      this.setState({itemsList: res.data, filteredList: res.data});
    })
    .catch(err => console.log(err));
  }
  
  getInfo(){
    
    const itemList = this.state.itemsList;
    const res = itemList.filter(item => item.title.toLowerCase().includes(this.state.query) || item.tags.toLowerCase().includes(this.state.query));
    this.setState({
      filteredList: res
    })
  }


  handleInputChange = () => {
    this.setState({
      query: this.search.value.toLowerCase()
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        this.setState({
          filteredList: this.state.itemsList
        })
      }
    })
  }
   
  render() {
    if(this.state.itemsList === null){
      return <div style={{position: "absolute", left: "0", 
      right: "0", 
      marginLeft: "auto",
      marginRight: "auto", width: "100px"}}> <Spinner /></div>
      //return <div style={{left: "47%",position: "absolute",top: "50%",}} className="loader"></div>
      } else {
    }
    return (
      <div  style={{marginTop: "0px"}} >
        <MDBContainer>
        <div>
          <Container className="d-flex justify-content-center">
          <Col md="5">
        <FormInline className="md-form">
          <Fa icon="search" style={{color: "white"}}/>
          <input
            style={{color: "white"}}
            className="active-white active-white form-control form-control-lg ml-3 w-75 search"
            type="text"
            placeholder="Search..."
            aria-label="Search"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </FormInline>
      </Col>
      </Container>
      </div>
          <MDBRow className="d-flex justify-content-center center"> 
              <List items={this.state.filteredList}/>
            </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default Dashboard;
