import { connect } from 'react-redux'
import Chat from '../components/chat'
import { onKeyPressByStore, onClickByStore } from '../actions'
import React from 'react';

const getVisibleMessages = (messages, selectedRoom) => {
  return messages.filter(msg => msg.room.name === selectedRoom.name)
}

const mapStateToProps = (state) => ({
  ...state,
  messages: getVisibleMessages(state.messages, state.selectedRoom)
})

const mapDispatchToProps = (dispatch) => {
  let connect = () => { dispatch({ type: "CONNECT" }) }
  let disconnect = () => { dispatch({ type: "DISCONNECT" }) }
  let send = (msg) => { dispatch({ type: "SEND_MESSAGE", message: msg }) }
  return ({ connect, disconnect, send })
}

class ChatContainer extends React.Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    );
    this.props.connect()
  }


  render() {
    return <Chat
      {...this.props}
      selectedRoom={this.props.rooms[0]}
      onKeyPress={onKeyPressByStore(this.props.store)}
      onClick={onClickByStore(this.props.store)}
    />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)

//{messages, rooms, selectedRoom, people, onKeyPress}