export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
    console.log("Add msg: "+JSON.stringify(action))
      return { ...state, messages: [...state.messages, action.msg] }
    case 'ADD_ROOM':
      return { ...state, rooms: [...state.rooms, action.room] }
    case 'SELECT_ROOM':
      return { ...state, selectedRoom: action.room }
    default:
      return {messages:[],...state}
  }
}