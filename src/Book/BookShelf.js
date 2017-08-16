import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} onBookMoved={this.props.onBookMoved} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    onBookMoved: PropTypes.func.isRequired
};

export default BookShelf;