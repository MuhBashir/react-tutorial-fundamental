import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './book';

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={`#${index + 1}`} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
