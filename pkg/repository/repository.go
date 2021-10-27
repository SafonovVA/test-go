package repository

import (
	"github.com/jmoiron/sqlx"
	"github.com/safonovva/test-go/models"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GetUser(username string, password string) (models.User, error)
}

type TodoList interface {

}

type TodoItem interface {

}

type Repository struct {
	Authorization
	TodoList
	TodoItem
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
	}
}
