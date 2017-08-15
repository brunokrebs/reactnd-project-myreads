import React, {Component} from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

class BookList extends Component {
    state = {
        wantToRead: [],
        currentlyReading: [],
        read: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                wantToRead: books.filter(book => book.shelf === 'wantToRead'),
                currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
                read: books.filter(book => book.shelf === 'read')
            });
        });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfName="Currently Reading" books={this.state.currentlyReading} />
                        <BookShelf shelfName="Want to Read" books={this.state.wantToRead} />
                        <BookShelf shelfName="Read" books={this.state.read} />
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BookList;