import toast from 'react-hot-toast';

export const getWishListBooks = () => {
    let books = []
    const savedBooks = localStorage.getItem('wishBooks')
    if (savedBooks) {
        books = JSON.parse(savedBooks)
    }
    return books
}

export const saveWishListBook = book => {
    let books = getWishListBooks()
    const isExist = books.find(b => b.bookId === book.bookId)
    if (isExist) {
        return toast.error("Already Add This Book")
    }
    books.push(book)
    localStorage.setItem('wishBooks', JSON.stringify(books))
    toast.success('Book Listed Successfully')
}

export const deleteWishListBook = book => {
    let books = getWishListBooks()
    const remaining = books.filter(b => b.bookId !== book.bookId)
    // console.log(remaining);
    localStorage.setItem('wishBooks',JSON.stringify(remaining))
   
}