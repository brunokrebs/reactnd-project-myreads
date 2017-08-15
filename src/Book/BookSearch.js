import React, {Component} from 'react';
import debounce from 'debounce';
import {search} from "./BooksAPI";
import Book from "./Book";

class BookSearch extends Component {
    state = {
        query: '',
        books: []
    };

    /**
     * @description Debounces `search` function by 300ms.
     * @param {string} query - The query to be sent to the backend
     * @param {function} cb - The function to be called after a backend response
     */
    searchQuery = debounce(function(query, cb) {
        search(query).then(cb);
    }, 300);

    /**
     * @description Sets the state on everychange, but triggers (debounced) searchQuery only if query is not empty.
     * @param {string} query - The query typed by the user
     */
    updateQuery = (query) => {
        this.setState({query});
        if (query.trim()) {
            this.searchQuery(query.trim(), response => {
                if (response.error) {
                    this.setState({books: []});
                } else {
                    this.setState({books: response});
                }
            });
        }
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.props.showShelves()}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               value={this.state.query}
                               onChange={(event) => this.updateQuery(event.target.value)}
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} onBookMoved={() => this.props.showShelves()} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookSearch;