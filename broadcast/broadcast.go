package broadcast

import (
	"github.com/gorilla/websocket"
	"github.com/pkg/errors"
	"sync"
)

//TODO: Add graceful Close method
type BroadCaster interface {
	Add(conn *websocket.Conn) 
	Remove(conn *websocket.Conn)
	Write(msg []byte) (n int, err error)
}

type broadCaster struct {
	connections map[*websocket.Conn]struct{}
	sync.RWMutex
}

func (bc *broadCaster) Add(conn *websocket.Conn) {
	bc.Lock()
	defer bc.Unlock()
	bc.connections[conn] = struct{}{}
}

func NewBroadCaster() *broadCaster{
	return &broadCaster{connections: make(map[*websocket.Conn]struct{})}
}

func (bc *broadCaster) Remove(conn *websocket.Conn) {
	bc.Lock()
	defer bc.Unlock()
	delete(bc.connections, conn)
}

// Write accepts serialized model.Message objects
func (bc *broadCaster) Write(msg []byte) (n int, err error) {
	bc.RLock()
	defer bc.RUnlock()
	for conn := range bc.connections {
		if err := conn.WriteMessage(websocket.TextMessage, msg); err != nil {
			return 0, errors.Wrap(err, "could not write message to broadcaster")
		}
	}
	return len(msg), nil
}