import Book from './book'
import booksData from './booksdata'

export default () => {

    const bookComponents = booksData.map(book => {
        return (
            <Book key={book.id} title={book.title} author={book.author} />
        );
    })

    return (
        <div>
            {bookComponents}
        </div>
    )
};