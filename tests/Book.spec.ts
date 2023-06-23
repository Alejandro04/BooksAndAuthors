import Author from '../src/domain/Author';
import Book from '../src/domain/Book';

describe('Book interface', () => {
  it('should have the correct properties', () => {
    const author: Author = {
      id: '1',
      fullname: 'John Doe',
      dateOfBirth: '04/02/1990',
      nationality: 'USA'
    };

    const book: Book = {
      id: '1',
      title: 'Sample Book',
      yearOfPublication: 2022,
      authorId: author
    };

    expect(book.id).toEqual('1');
    expect(book.title).toEqual('Sample Book');
    expect(book.yearOfPublication).toEqual(2022);
    expect(book.authorId).toEqual(author);
  });
});
