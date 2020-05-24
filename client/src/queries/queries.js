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

export { getBooksQuery, getAuthorsQuery }