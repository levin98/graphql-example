import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQueryById } from '../queries/queries';

class BookDetails extends Component {

    render() {
        return (
            <div id="book-details">
                <p></p>
            </div>
        );
    }
}

export default graphql(getBookQueryById)(BookDetails);