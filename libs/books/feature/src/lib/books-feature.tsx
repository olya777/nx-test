import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getBooks } from '@myorg/books/data-access';
import { Books, Book } from '@myorg/books/ui';

export const BooksFeature = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={book => alert(`Added ${book.title}`)} />
    </>
  );
};

export default BooksFeature;
