import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQueryById } from '../queries/queries';

class BookDetails extends Component {

    displayBookDetails() {
        const { book } = this.props.data
        return book ? 
            <div>
                <h2>{ book.name }</h2>
                <p>{ book.genre }</p>
                <p>{ book.author.name }</p>
                <p>All books by this author:</p>
                <ul className="other-books">
                    { book.author.books.map(item => <li key={ item.id }>{ item.name }</li>) }
                </ul>
            </div>
        :
            <div>No book selected...</div>
    }

    render() {
        return (
            <div id="book-details">
                { this.displayBookDetails() }
            </div>
        );
    }
}

export default graphql(getBookQueryById, {
    options: props => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);