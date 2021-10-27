package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/safonovva/test-go/models"
)

type AuthPostgres struct {
	db *sqlx.DB
}

func NewAuthPostgres(db *sqlx.DB) *AuthPostgres {
	return &AuthPostgres{db: db}
}

func (r *AuthPostgres) CreateUser(user models.User) (int, error)  {
	var id int
	query := fmt.Sprintf("INSERT INTO %s (name, username, password_hash) values ($1, $2, $3) RETURNING id", usersTable)
	row := r.db.QueryRow(query, user.Name, user.Username, user.Password)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}


	return id, nil
}
//migrate -path ./schema -database 'postgres://postgres:1@localhost:5434/postgres?sslmode=disable' up 
//migrate -path ./schema -database 'postgres://postgres:1@localhost:5434/postgres?sslmode=disable' down