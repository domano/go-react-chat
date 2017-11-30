import React, { Component } from 'react';
import ChatEntry from './chatentry'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = props
  }

  componentDidMount() {
    // this is an "echo" websocket service for testing pusposes
    this.connection = new WebSocket('ws://' + window.location.hostname + ':12345/chat');
    // listen to onmessage event
    this.connection.onmessage = evt => {
      // add the new message to state
      this.setState({
        messages: this.state.messages.concat([evt.data])
      })
    }
  };

  onKeyPress(event) {
    if (event.key === 'Enter') {
      let message = event.target.value
      event.target.value = ""
      this.connection.send(message)

    }
  }

  render() {
    return (
      <div className="chat">
        <div className="messages">
          {
            this.state.messages.map(function (msg, index) {
              return <ChatEntry message={msg} />
            })
          }
        </div>
        <input className="input" placeholder="Enter text" onKeyPress={this.onKeyPress.bind(this)} />
      </div>
    );
  }


}

export default Chat;