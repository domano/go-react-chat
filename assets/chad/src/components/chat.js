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

//TODO adapt to new redux changes
const Chat = ({messages, rooms, selectedRoom, people, onKeyPress}) => {
      <MuiThemeProvider>
        <div className="chat">
          <div className="header">
            <AppBar
              title="Go React Chat!"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          </div>
          <People people={people} />
          <div className="rooms">
            <Rooms rooms={rooms} selected={selectedRoom}/>
          </div>
          <div className="messages">
            <List>
              {
                rooms[selectedRoom].messages
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
              onKeyPress={onKeyPress} />
          </div>
        </div>
      </MuiThemeProvider>
    ;
  }

export default Chat;