import Author from '../domain/Author';
import { AuthorRepository } from '../domain/AuthorRepository';

export class AuthorRepositoryImpl implements AuthorRepository {
  private authors: Author[];

  constructor() {
    this.authors = [];
  }

  getList(): Author[] {
    const authors = this.getAllAuthors()
    return authors;
  }

  getOne(): Author {
    if (this.authors.length > 0) {
      return this.authors[0];
    }
    throw new Error('No authors available');
  }

  save(author: Author): Author {
    this.authors = [...this.authors, author];
    return author;
  }

  update(author: Author): Author {
    const index = this.authors.findIndex(a => a.id === author.id);
    if (index !== -1) {
      this.authors[index] = author;
      return author;
    }
    throw new Error('Author not found');
  }

  delete(id: string): boolean {
    const index = this.authors.findIndex(a => a.id === id);
    if (index !== -1) {
      this.authors.splice(index, 1);
      return true;
    }
    return false;
  }

  getAllAuthors(): Author[] {
    const allAuthors = this.authors.map(author => {
       	return {
          id: author.id,
          fullname: author.fullname,
          nationality: author.nationality,
          dateOfBirth: author.dateOfBirth
        };
      });

	return allAuthors
  }
}
