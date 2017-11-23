export const onKeyPressByState = (store) => (e) => {
  if (e.key === 'Enter') {
    let state = store.getState()
    let text = e.target.value
    let message = {
      text: text,
      room: state.selectedRoom
    }
    this.store.connection.send(message)
  }
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