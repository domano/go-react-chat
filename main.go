package main

import (
	"io"
	"net/http"
	"sync"

	"golang.org/x/net/websocket"
)

var messages chan string = make(chan string)

var bc *BroadCaster = &BroadCaster{connections: make(map[*websocket.Conn]struct{})}

func ChatServer(ws *websocket.Conn) {
	defer ws.Close()
	bc.Add(ws)
	io.Copy(bc, ws)
}

func main() {
	http.Handle("/chat", websocket.Handler(ChatServer))
	err := http.ListenAndServe(":12345", nil)
	if err != nil {
		panic("ListenAndServe: " + err.Error())
	}
}

type BroadCaster struct {
	connections map[*websocket.Conn]bool
	sync.RWMutex
}

func (bc *BroadCaster) Add(conn *websocket.Conn) {
	bc.Lock()
	bc.connections[conn] = true
	defer bc.Unlock()
}

func (bc *BroadCaster) Write(msg []byte) (n int, err error) {
	bc.RLock()
	for conn := range bc.connections {
		conn.Write(msg)
	}
	bc.RUnlock()
	return len(msg), nil
}
