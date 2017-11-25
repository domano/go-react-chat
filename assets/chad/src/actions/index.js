export const onKeyPressByStore = (store) => (e) => {
  if (e.key === 'Enter') {
    let state = store.getState()
    let text = e.target.value
    let message = {
      text: text,
      room: state.selectedRoom
    }
    store.dispatch({ type: "SEND_MSG", msg: message })
  }
}

export const onClickByStore = (store) => (e) => {
  let text = e.target.value
  let room = {
    name: text,
  }
  store.dispatch({ type: "SELECT_ROOM", room: room })
}


// type Message struct {
// 	Text string `json:"text,omitempty"`
// 	User *User `json:"user,omitempty"`
// 	Room *Room `json:"room,omitempty"`
// 	Timestamp *time.Time `json:"timestamp,omitempty"`
// }

// type Room struct {
// 	Name string `json:"name,omitempty"`
// 	Users []User `json:"users,omitempty"`
// }