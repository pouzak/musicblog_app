

import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Dash from './components/Dash';
import Nav from './components/Navbar';
import Story from './components/Story';
import AddStory from './components/Add';



 class App extends Component {
   state = {
     alert: {
       type: null,
       text: null
     }
   }


componentDidUpdate () {
  if(this.state.alert)
  setTimeout(() => {
    this.setState({ alert: null});
  }, 3000);
}



changeAlert = (alert, txt) => {
  
  this.setState({
    alert: {
      type: alert,
      text: txt
    } 
  })
}
  render() {
    
    return (
      <BrowserRouter>
        <div>
        <Nav alert={this.state.alert}/>
        <Switch>
          <Route exact path="/" component={Dash}/>
          <Route path="/stories/:id" render={(props) => <Story {...props} alert={this.changeAlert}/>} />
          <Route path="/addstory" render={(props) => <AddStory {...props} alert={this.changeAlert}/>} />
        </Switch>
      </div>
      </BrowserRouter>
      
    )
  }
  
}


export default App;