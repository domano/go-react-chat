package main

import (
	"net/http"
	"github.com/domano/go-react-chat/broadcast"	
	log "github.com/sirupsen/logrus"
)

var logger = log.StandardLogger()

func main() {

	hub := broadcast.NewHub()
	go hub.Run()
	http.HandleFunc("/chat", func(w http.ResponseWriter, r *http.Request) {
		broadcast.ServeWs(hub, w, r)
	})
	println("Run server...")
	err := http.ListenAndServe(":12345", nil)
	if err != nil {
		panic("ListenAndServe: " + err.Error())
	}
}

