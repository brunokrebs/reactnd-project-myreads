import React from 'react';
import './App.css';
import BookList from "./Book/BookList";
import BookSearch from "./Book/BookSearch";

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false
    };

    showShelves = () => {
        this.setState({
            showSearchPage: false
        });
    };

    showSearchPages = () => {
        this.setState({
            showSearchPage: true
        });
    };

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <BookSearch showShelves={this.showShelves} />
                ) : (
                    <BookList showSearchPages={this.showSearchPages} />
                )}
            </div>
        )
    }
}

export default BooksApp
