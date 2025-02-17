import { gql } from 'apollo-boost'

const getBooksQuery = gql`
    {
        books {
            name
            id
            genre
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
            age
        }
    }
`

const addBookMutation = gql`
    mutation ($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`

const getBookQueryById = gql`
    query ($id: ID) {
        book (id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQueryById }