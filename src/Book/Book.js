import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
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
                                onChange={(event) => this.props.onBookMoved(this.props.book, event.target.value)}>
                            <option value="" disabled>Move to...</option>
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

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onBookMoved: PropTypes.func.isRequired
};

export default Book;