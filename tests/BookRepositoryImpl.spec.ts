import { BookRepositoryImpl } from '../src/infraestructure/Book';
import Book from '../src/domain/Book';

describe('BookRepositoryImpl', () => {
  let bookRepository: BookRepositoryImpl;
  const book: Book = {
    id: '1',
    title: 'Sample Book',
    yearOfPublication: 2022,
    authorId: {
        id: '1',
        fullname: 'John Doe',
        nationality: 'American',
        dateOfBirth: '02/01/1990',
    },
  };

  beforeEach(() => {
    bookRepository = new BookRepositoryImpl();
  });

  test('getList returns all books', () => {
    bookRepository.save(book);
    const books = bookRepository.getList();
    expect(books).toEqual([book]);
  });

  test('getOne returns the first book', () => {
    bookRepository.save(book);
    const fetchedBook = bookRepository.getOne();
    expect(fetchedBook).toEqual(book);
  });

  test('getOne throws an error if no books are available', () => {
    expect(() => {
      bookRepository.getOne();
    }).toThrow('No books available');
  });

  test('save adds the book to the repository', () => {
    bookRepository.save(book);
    const books = bookRepository.getAllBooks();
    expect(books).toEqual([book]);
  });

  test('update updates an existing book', () => {
    const updatedBook: Book = {
      id: '1',
      title: 'Updated Book',
      yearOfPublication: 2023,
      authorId: {
        id: '1',
        fullname: 'John Doe',
        nationality: 'American',
        dateOfBirth: '02/01/1990',
    },
    };

    bookRepository.save(book);
    bookRepository.update(updatedBook);
    const books = bookRepository.getAllBooks();
    expect(books).toEqual([updatedBook]);
  });

  test('update throws an error if the book is not found', () => {
    const nonExistingBook: Book = {
      id: '2',
      title: 'Non-existing Book',
      yearOfPublication: 2023,
      authorId: {
        id: '1',
        fullname: 'John Doe',
        nationality: 'American',
        dateOfBirth: '02/01/1990',
    },
    };

    expect(() => {
      bookRepository.update(nonExistingBook);
    }).toThrow('Book not found');
  });

  test('delete removes a book from the repository', () => {
    bookRepository.save(book);
    bookRepository.delete(book.id);
    const books = bookRepository.getAllBooks();
    expect(books).toEqual([]);
  });

  test('delete returns false if the book is not found', () => {
    const nonExistingBookId = '2';
    const result = bookRepository.delete(nonExistingBookId);
    expect(result).toBe(false);
  });
});
