import React, {Component} from 'react';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class BookList extends Component {
    render() {
        const books = this.props.books;
        const wantToRead = books.filter(book => book.shelf === 'wantToRead');
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        const read = books.filter(book => book.shelf === 'read');

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfName="Currently Reading"
                                   books={currentlyReading}
                                   onBookMoved={this.props.onBookMoved} />

                        <BookShelf shelfName="Want to Read"
                                   books={wantToRead}
                                   onBookMoved={this.props.onBookMoved} />

                        <BookShelf shelfName="Read"
                                   books={read}
                                   onBookMoved={this.props.onBookMoved} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onBookMoved: PropTypes.func.isRequired
};

export default BookList;