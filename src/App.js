import React, { Component} from "react";
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";
import logo from "./logo.svg";

class App extends  Component{
  componentDidMount() {
    addResponseMessage("Welcome to this awsome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming ${newMessage}`);
    //TODO Send message through the backend API
    let response = "An awesome backend answer";
    addResponseMessage(response);
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}

export default App;
