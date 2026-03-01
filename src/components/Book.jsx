import './styles.css';
function Book(props){
    return (
        <div className="book-card">
           <img className="book-cover" src={props.bookDetails.image} alt={props.bookDetails.title} height={250} width={200}/>
           <div>
               <h2 className="book-title">{props.bookDetails.title}</h2>
               <p className="book-author">{props.bookDetails.author}</p>
               <p className="book-info">{props.bookDetails.description}</p>
           </div>
        </div>
    )
}
export default Book;