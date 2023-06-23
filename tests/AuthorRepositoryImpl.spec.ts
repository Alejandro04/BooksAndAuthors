import { AuthorRepositoryImpl } from '../src/infraestructure/Author'
import Author from '../src/domain/Author';

describe('AuthorRepositoryImpl', () => {
  let authorRepository: AuthorRepositoryImpl;
  const author: Author = {
    id: '1',
    fullname: 'John Doe',
    nationality: 'American',
    dateOfBirth: '02/01/1990',
  };

  beforeEach(() => {
    authorRepository = new AuthorRepositoryImpl();
  });

  test('getList returns all authors', () => {
    authorRepository.save(author);
    const authors = authorRepository.getList();
    expect(authors).toEqual([author]);
  });

  test('getOne returns the first author', () => {
    authorRepository.save(author);
    const fetchedAuthor = authorRepository.getOne();
    expect(fetchedAuthor).toEqual(author);
  });

  test('getOne throws an error if no authors are available', () => {
    expect(() => {
      authorRepository.getOne();
    }).toThrow('No authors available');
  });

  test('save adds the author to the repository', () => {
    authorRepository.save(author);
    const authors = authorRepository.getAllAuthors();
    expect(authors).toEqual([author]);
  });

  test('update updates an existing author', () => {
    const updatedAuthor: Author = {
      id: '1',
      fullname: 'Jane Smith',
      nationality: 'British',
      dateOfBirth: '02/01/1990',
    };

    authorRepository.save(author);
    authorRepository.update(updatedAuthor);
    const authors = authorRepository.getAllAuthors();
    expect(authors).toEqual([updatedAuthor]);
  });

  test('update throws an error if the author is not found', () => {
    const nonExistingAuthor: Author = {
      id: '2',
      fullname: 'Jane Smith',
      nationality: 'British',
      dateOfBirth: '02/01/1990',
    };

    expect(() => {
      authorRepository.update(nonExistingAuthor);
    }).toThrow('Author not found');
  });

  test('delete removes an author from the repository', () => {
    authorRepository.save(author);
    authorRepository.delete(author.id);
    const authors = authorRepository.getAllAuthors();
    expect(authors).toEqual([]);
  });

  test('delete returns false if the author is not found', () => {
    const nonExistingAuthorId = '2';
    const result = authorRepository.delete(nonExistingAuthorId);
    expect(result).toBe(false);
  });
});
