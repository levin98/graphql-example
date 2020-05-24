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
    mutation {
        addBook(name: "", genre: "", authorId: "") {
            name
            id
        }
    }
`

export { getBooksQuery, getAuthorsQuery, addBookMutation }