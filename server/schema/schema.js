const graphql = require('graphql')
const _ = require('lodash')

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql

// Dummy Data
let books = [
    { name: "Reigns of Chaos", genre: 'Fantasy', id: '1', authorId: '2' },
    { name: "Frozen Throne", genre: 'Fantasy', id: '2', authorId: '3' },
    { name: "The Strangers Things", genre: 'Horror', id: '3', authorId: '1' },
    { name: "Frozen Throne II", genre: 'Fantasy', id: '2', authorId: '3' },
    { name: "The Strangers Things II", genre: 'Horror', id: '3', authorId: '1' }
]

let authors = [
    { name: "James Bend", age: 44, id: '1' },
    { name: "Jackie Lee", age: 55, id: '2' },
    { name: "Frank Ron", age: 66, id: '3' }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return _.find(authors, { id: parent.authorId })
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, { authorId: parent.id })
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // To get data from db / other source
                return _.find(books, { id: args.id })
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(authors, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})