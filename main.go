package main

import (
	"net/http"
	"github.com/gorilla/websocket"
	"github.com/domano/go-react-chat/broadcast"	
	"github.com/domano/go-react-chat/model"	
	"encoding/json"
	log "github.com/sirupsen/logrus"
)

var messages chan string = make(chan string)
 
var bc  = broadcast.NewBroadCaster()

var upgrader = websocket.Upgrader{} // use default options

var logger = log.StandardLogger()

func ChatServer(rw http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(rw, r, nil)
	if err != nil {
		logger.WithError(err).Error("Failed upgrade")
		return
	}
	defer conn.Close()
	bc.Add(conn)
	defer bc.Remove(conn)
	encoder := json.NewEncoder(bc)
	for {
		_, reader, err := conn.NextReader()
		if err != nil {
			logger.WithError(err).Error("Failed reading")
			return
		}

		msg := &model.Message{}
		if err := json.NewDecoder(reader).Decode(msg); err != nil {
			logger.WithError(err).Error("Failed decoding")
			return
		}
		
		logger.WithField("message", msg).Info("Sending msg")
		// TODO: Do msg validation here
			if err := encoder.Encode(msg); err != nil {
				logger.WithError(err).Error("Failed encoding")
				return
			}
	}
}

func main() {
	upgrader.CheckOrigin = func(r *http.Request) bool {
		return true
	}

	http.HandleFunc("/chat", ChatServer)
	println("Run server...")
	err := http.ListenAndServe(":12345", nil)
	if err != nil {
		panic("ListenAndServe: " + err.Error())
	}
}

