import React, { Component } from 'react';
import { withContext } from "with-context";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        alert: {
          type: null,
          text: null
        }
      }
      changeAlert = (alert, txt) => {
  
        this.setState({
          alert: {
            type: alert,
            text: txt
          } 
        })
      }
      
      componentDidUpdate () {
        if(this.state.alert)
        setTimeout(() => {
          this.setState({ alert: null});
        }, 3000);
      }

  render() {
    return (
      <Context.Provider value={{
          alert: this.state.alert,
          changeAlert: this.changeAlert}}>
          {this.props.children}
      </Context.Provider>
    )
  }
}
export const withAlert = withContext(Context);
export const Consumer = Context.Consumer;

