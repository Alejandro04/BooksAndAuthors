import Author from '../src/domain/Author';

describe('Author interface', () => {
    it('should have the correct properties', () => {
      const author: Author = {
        id: '1',
        fullname: 'John Doe',
        dateOfBirth: '04/02/1990',
        nationality: 'USA'
      };
  
      expect(author.id).toEqual('1');
      expect(author.fullname).toEqual('John Doe');
      expect(author.dateOfBirth).toEqual('04/02/1990');
      expect(author.nationality).toEqual('USA');
    });
  });