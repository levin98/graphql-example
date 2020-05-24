import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    displayBooks() {
        let data = this.props.data;
        return data.loading ? 
        (<div>Loading books...</div>) 
        : 
        data.books.map(book => <li key={ book.id } onClick={ e => this.setState({ selected: book.id })}>{`${ book.name } (${ book.genre })`}</li>)
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
                <br />
                <BookDetails bookId={ this.state.selected } />
                <br />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
