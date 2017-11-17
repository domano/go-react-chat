package model

import (
	"time"
)
type User struct {
	Name string `json:"name,omitempty"`
}

type Message struct {
	Text string `json:"text,omitempty"`
	User *User `json:"user,omitempty"`
	Room *Room `json:"room,omitempty"`
	Timestamp *time.Time `json:"timestamp,omitempty"`
}

type Room struct {
	Name string `json:"name,omitempty"`
	Users []User `json:"users,omitempty"`
}