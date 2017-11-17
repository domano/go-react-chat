export function onKeyPress(e) {
  if (e.key === 'Enter') {
    let message = e.target.value
    this.connection.send(message)
  }
}