import Author from './Author'

export interface AuthorRepository {
    getList(): Author[]
    getOne(): Author
    save(author: Author): Author
    update(author: Author): Author
    delete(id: string): boolean
} 