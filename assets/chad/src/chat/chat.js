import React from 'react';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Rooms from './rooms'
import People from './people'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


import './chat.css'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = props
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      let message = e.target.value
      this.connection.send(message)
    }
  }



  componentDidMount() {
    // this is an "echo" websocket service for testing pusposes
    this.connection = new WebSocket('ws://' + window.location.hostname + ':12345/chat');
    // listen to onmessage event
    this.connection.onmessage = evt => {
      // add the new message to state
      this.setState({
        let room = evt.data.room
        messages: this.state.messages.concat([evt.data])
      })
    }
    this.setState({selectedRoom:0})
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="chat">
          <div className="header">
            <AppBar
              title="Go React Chat!"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          </div>
          <People people={mockPeople} />
          <div className="rooms">
            <Rooms rooms={this.state.rooms} selected={this.state.selectedRoom}/>
          </div>
          <div className="messages">
            <List>
              {
                this.state.rooms[this.state.selectedRoom].messages
                  .map((msg, index) => {
                    return <Paper className="message" zDepth={2}>
                      <ListItem key={index} primaryText={msg.text} />
                    </Paper>
                  })
              }
            </List>
          </div>
          <div className="inputField">
            <Divider />
            <TextField id="inputField"
              defaultValue=""
              fullWidth={true}
              onKeyPress={this._handleKeyPress.bind(this)} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }


}

export default Chat;