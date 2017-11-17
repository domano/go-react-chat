import {connect} from 'react-redux'
import Chat from '../components/chat'

const getVisibleMessages = (messages, selectedRoom) => {
  return messages.filter(msg =>  msg.room.name === selectedRoom.name)
}

const mapStateToProps = (state) => ({
  ...state,
  messages:getVisibleMessages(state.messages, state.selectedRoom)
})

const mapDispatchToProps= (state) => {
  //TODO pass on key press with correct dispatch function for websocket stuff
  onKeyPress: 
}

//TODO create websocket middleware

// componentDidMount() {
//   // this is an "echo" websocket service for testing pusposes
//   this.connection = new WebSocket('ws://' + window.location.hostname + ':12345/chat');
//   // listen to onmessage event
//   this.connection.onmessage = evt => {
//     // add the new message to state
//     this.setState({
//       let room = evt.data.room
//       messages: this.state.messages.concat([evt.data])
//     })
//   }
//   this.setState({selectedRoom:0})
// };