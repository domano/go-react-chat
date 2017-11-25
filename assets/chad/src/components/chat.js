import React from 'react';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Rooms from './rooms'
import People from './people'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


import './chat.css'

const Chat = ({messages, rooms, selectedRoom, people, onKeyPress, onClick}) => {
      return <MuiThemeProvider>
        <div className="chat">
          <div className="header">
            <AppBar
              title="Go React Chat!"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          </div>
          <People people={people} />
          <div className="rooms">
            <Rooms onClick={onClick} rooms={rooms} selected={selectedRoom.name}/>
          </div>
          <div className="messages">
            <List>
              {
                messages
                  .map((msg, index) => {
                    return <Paper key={index} className="message" zDepth={2}>
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