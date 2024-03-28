import toast from 'react-hot-toast';
export const getReadBooks = () => {
    let books = []
    const savedBooks = localStorage.getItem('readBooks')
    if (savedBooks) {
        books = JSON.parse(savedBooks)
    }
    return books
}

export const saveReadBook = book => {
    let books = getReadBooks()
    const isExist = books.find(b => b.bookId === book.bookId)
    if (isExist) {
        return toast.error("Already Add This Book to your Read List")
    }
    books.push(book)
    localStorage.setItem('readBooks', JSON.stringify(books))
    toast.success('Successfully Listed in Read List')
}

