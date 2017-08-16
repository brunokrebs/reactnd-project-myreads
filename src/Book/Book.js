import React, {Component} from 'react';
import {update} from "./BooksAPI";

class Book extends Component {
    moveBook = (book, shelf) => {
        update(book, shelf).then(() => {
            if (this.props.onBookMoved) {
                this.props.onBookMoved();
            }
        });
    };

    render() {
        const bookCover = {
            width: 128,
            height: 192,
            backgroundImage: 'url(' + this.props.book.imageLinks.smallThumbnail + ')'
        };
        const authors = this.props.book.authors || [];
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={bookCover} />
                    <div className="book-shelf-changer">
                        <select value={this.props.book.shelf}
                                onChange={(event) => this.moveBook(this.props.book, event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    {authors.map((author, index) => (
                        <div key={index}>
                            {author}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Book;