import Book from './Book';
import './styles.css';
import { useState } from 'react';
function BookList(props){
  const [searchText,setSearchText] = useState('');
  const [filteredBooks,setFilteredBooks] = useState(props.books)
  function handleSearch(){
    const filterBooks = props.books.filter((book)=>{
        return book.title.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredBooks(filterBooks);
  }

    return (
        <div className="book-list">
           <h1 className="book-list-title">Book List</h1>
           <div className='search-space'>
                <input className='input-bar' type='text' placeholder='Enter books here'
                onChange={(e)=>setSearchText(e.target.value)}/>
                <button className='search-btn' onClick={handleSearch}>Search</button>
           </div>
           <div className="book-cards">
               {
                filteredBooks.map((book)=>{
                    return <Book key={book.id} bookDetails={book} />
                })
               }
           </div>
        </div>
    )
}
export default BookList;