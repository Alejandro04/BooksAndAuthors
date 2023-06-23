import Book from './Book'

export interface BookRepository {
    getList(): Book[]
    getOne(): Book
    save(book: Book): Book
    update(book: Book): Book
    delete(id: number): boolean
} 