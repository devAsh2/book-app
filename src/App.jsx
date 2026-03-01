/**
 *Book List <Component>
 </Component>
 Book Component  
 */
import BookList from './components/BookList';
import {Books} from './utils/mockData'
function App() {
  return (
    <>
      <BookList books={Books}/>
    </>
  )
}

export default App
