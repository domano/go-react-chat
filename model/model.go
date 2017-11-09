package model

import (
	"time"
)
type User struct {
	Name string `json:",omitempty"`
}

type Message struct {
	Text string `json:",omitempty"`
	User User `json:",omitempty"`
	Room Room `json:",omitempty"`
	Timestamp time.Time `json:",omitempty"`
}

type Room struct {
	Name string `json:",omitempty"`
	Users []User `json:",omitempty"`
}