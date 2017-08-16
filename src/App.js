import React from 'react';
import './App.css';
import BookList from './Book/BookList';
import BookSearch from './Book/BookSearch';
import {getAll, update} from './Book/BooksAPI';
import find from 'lodash.find';
import remove from 'lodash.remove';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        books: []
    };

    /**
     * Updates the current state of the application, moving the book informed to the desired shelf. If shelf 'none' is
     * informed, then the book is removed from the books list by its id. If the book was already in one of the shelves,
     * then its shelf is updated. Lastly, if the book was on no shelf ('none'), the book is added to the list.
     * @param book - The book that have been moved
     * @param shelf - The shelf where the book has been moved to
     */
    onBookMoved = (book, shelf) => {
        update(book, shelf).then(() => {
            const booksShelved = this.state.books;
            const bookShelved = find(this.state.books, b => (b.id === book.id));

            if (shelf === 'none') {
                remove(booksShelved, b => (b.id === book.id));
            } else if (bookShelved) {
                bookShelved.shelf = shelf;
            } else {
                book.shelf = shelf;
                booksShelved.push(book);
            }

            this.setState({
                books: booksShelved
            });
        });
    };

    componentDidMount() {
        getAll().then(books => {
            this.setState({ books });
        });
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/search" render={() => (
                    <BookSearch booksShelved={this.state.books}
                                onBookMoved={this.onBookMoved} />
                )} />
                <Route exact path="/" render={() => (
                    <BookList books={this.state.books}
                              onBookMoved={this.onBookMoved} />
                )} />
            </div>
        )
    }
}

export default BooksApp
