import { connect } from 'react-redux'
import Chat from '../components/chat'
import { onKeyPressByStore, onClickByStore } from '../actions'
import React from 'react';

const getVisibleMessages = (messages, selectedRoom) => {
  return messages.filter(msg => msg.room.name === selectedRoom.name)
}

const mapStateToProps = (state, ownProps) => {
  let data = {...ownProps, ...state}
  console.log("state: "+JSON.stringify(state))
  return ({
    ...data,
    messages: getVisibleMessages(data.messages, data.selectedRoom)
  })
}

const mapDispatchToProps = (dispatch) => {
  let connect = () => { dispatch({ type: "CONNECT" }) }
  let disconnect = () => { dispatch({ type: "DISCONNECT" }) }
  let send = (msg) => { dispatch({ type: "SEND_MESSAGE", message: msg }) }
  return ({dispatch, connect, disconnect, send })
}

class VisibleChat extends React.Component {
  componentDidMount() {
    this.props.connect()
  }

  render() {
    console.log("this.props")
    console.log(this.props)
    return <Chat
      {...this.props}
      onKeyPress={onKeyPressByStore(this.props)}
      onClick={onClickByStore(this.props)}
    />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleChat)

//{messages, rooms, selectedRoom, people, onKeyPress}