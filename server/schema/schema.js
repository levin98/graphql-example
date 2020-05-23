const graphql = require('graphql')
const _ = require('lodash')

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID 
} = graphql

// Dummy Data
let books = [
    { name: "Reigns of Chaos", genre: 'Fantasy', id: '1' },
    { name: "Frozen Throne", genre: 'Fantasy', id: '2' },
    { name: "The Strangers Things", genre: 'Horror', id: '3' }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
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
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})