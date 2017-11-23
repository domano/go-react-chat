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

