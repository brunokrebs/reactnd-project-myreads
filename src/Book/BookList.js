import React, {Component} from 'react';
import BookShelf from './BookShelf';

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
                    <a onClick={() => this.props.showSearchPages()}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BookList;