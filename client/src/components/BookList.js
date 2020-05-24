import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
{
    books {
        name
        id
        genre
    }
}
`

class BookList extends Component {

    displayBooks() {
        let data = this.props.data;
        return data.loading ? (<div>Loading books...</div>) : data.books.map(book => <li key={ book.id }>{`${ book.name } ${ book.genre }`}</li>)
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
