export default (state, action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return {...state, messages: [...state.messages, action.msg]}
      case 'ADD_ROOM':
      return {...state, rooms: [...state.rooms, action.room]}
  }
}