

import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Nav from './components/Navbar';
import Post from './components/Post';
import AddStory from './components/Add';
import { Provider } from './context';




 class App extends Component {

//props through router
//<Route path="/stories/:id" render={(props) => <Story {...props} alert={this.changeAlert}/>} /> 
  render() {
    
    return (
      <Provider>
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/stories/:id" component ={Post} />
              <Route path="/addstory" component ={AddStory}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
  
}


export default App;