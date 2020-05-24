import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {

    displayAuthors() {
        let data = this.props.data;
        return data.loading ? (<option disabled>Loading authors...</option>) : data.authors.map(author => <option key={ author.id }>{ author.name }</option>)
    }

    render() {
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book Name:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Gebre:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>

                <button>+</button>
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);