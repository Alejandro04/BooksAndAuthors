import Author from './Author'

export default interface Book {
    id: string
    title: string,
    yearOfPublication: number,
    authorId: Author
}