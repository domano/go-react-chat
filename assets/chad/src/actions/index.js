export const onKeyPressByStore = (store) => (e) => {
  if (e.key === 'Enter') {
    let text = e.target.value
    let message = {
      text: text,
      room: store.selectedRoom
    }
    console.log("Dispatching send_msg: "+JSON.stringify(message))
    store.dispatch({ type: "SEND_MSG", msg: message })
  }
}

export const onClickByStore = (store) => (e) => {
  console.log(e.target.textContent)
  let text = e.target.textContent
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