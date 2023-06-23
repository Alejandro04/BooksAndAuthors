import Book from '../domain/Book';
import { BookRepository } from '../domain/BookRepository';

export class BookRepositoryImpl implements BookRepository {
	private books: Book[];

	constructor() {
		this.books = [];
	}

	getList(): Book[] {
		const books = this.getAllBooks();
		return books;
	}

	getOne(): Book {
		if (this.books.length > 0) {
			return this.books[0];
		}
		throw new Error('No books available');
	}

	save(book: Book): Book {
		this.books = [...this.books, book];
		return book;
	}

	update(book: Book): Book {
		const index = this.books.findIndex(a => a.id === book.id);
		if (index !== -1) {
			this.books[index] = book;
			return book;
		}
		throw new Error('Book not found');
	}

	delete(id: string): boolean {
		const index = this.books.findIndex(a => a.id === id);
		if (index !== -1) {
			this.books.splice(index, 1);
			return true;
		}
		return false;
	}

	getAllBooks(): Book[] {
		const allBooks = this.books.map(book => {
			return {
				id: book.id,
				title: book.title,
				yearOfPublication: book.yearOfPublication,
				authorId: book.authorId,
			};
		});

		return allBooks
	}
}
