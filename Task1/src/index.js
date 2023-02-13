import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const booksArray = [
  {
    id: 1,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    img: "https://m.media-amazon.com/images/P/B07C7M8SX9.01._SCLZZZZZZZ_SX500_.jpg",
    price: 9.98
  },
  {
    id: 2,
    title: "12 Months to $1 Million",
    author: "Ryan Moran",
    img: "https://m.media-amazon.com/images/P/B07ZKTNQBM.01._SCLZZZZZZZ_SX500_.jpg",
    price: 12.99
  },
  {
    id: 3,
    title: "Can't Hurt Me",
    author: "David Goggins",
    img: "https://m.media-amazon.com/images/P/B07H453KGH.01._SCLZZZZZZZ_SX500_.jpg",
    price: 7.67
  },
  {
    id: 4,
    title: "Atomic Hearts",
    author: "James",
    img: "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
    price: 12.99
  }
];

function BookList () {
  console.log("test")
  return (
    <>
      <legend>Best-Seller in Books</legend>
      <section className='booklist'>
        {booksArray.map((bookItem) => {
          const {id} = bookItem;
          return <Book key={id} book={bookItem} />
        })}
      </section>
    </>
  )
}

const Book = (props) => {
  const {id, title, author, img, price} = props.book;

  console.log(props.book)

  function getBookInfo() {
    const infos = ` 
    Book Seller position: #${id} 
    Book Title: ${title} 
    Book author: ${author} 
    Book PRICE: $${price} 
    `;
    alert(infos)
  }
  return (
    <>
      <article className='book'>
        <span className='bookId'>#{id}</span><br />
        <img className='bookImg' src={img} alt="book cover" />
        <h1 className='bookTitle'>{title}</h1>
        <button onClick={getBookInfo}>Get Book Info</button>
      </article>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList />)
