import React, {Component} from 'react';
import debounce from 'debounce';
import {search} from "./BooksAPI";
import Book from "./Book";
import find from 'lodash.find'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class BookSearch extends Component {
    state = {
        query: '',
        booksFound: []
    };

    /**
     * @description Debounces `search` function by 300ms.
     * @param {string} query - The query to be sent to the backend
     * @param {function} cb - The function to be called after a backend response
     */
    searchQuery = debounce(function(query, cb) {
        this.props.onStartLoading();
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
                    this.setState({booksFound: []});
                } else {
                    this.setState({booksFound: response});
                }
                this.props.onStopLoading();
            });
        }
    };

    setBookShelf() {
        const booksFound = this.state.booksFound;
        const booksShelved = this.props.booksShelved;
        booksFound.forEach(bookFound => {
            const bookShelved = find(booksShelved, b => (b.id === bookFound.id));
            bookFound.shelf = bookShelved ? bookShelved.shelf : 'none';
        });
    }

    render() {
        this.setBookShelf();
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Back</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               value={this.state.query}
                               onChange={(event) => this.updateQuery(event.target.value)}
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.booksFound.map((book) => (
                            <li key={book.id}>
                                <Book book={book} onBookMoved={this.props.onBookMoved} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

BookSearch.propTypes = {
    booksShelved: PropTypes.array.isRequired,
    onBookMoved: PropTypes.func.isRequired,
    onStartLoading: PropTypes.func.isRequired,
    onStopLoading: PropTypes.func.isRequired
};

export default BookSearch;