import React from 'react';
import styled from 'styled-components';
import { Button } from '@myorg/ui';

export interface BookProps {
  book: any;
  onAdd: (book: any) => void;
}

const StyledBook = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  > span {
    padding: 1rem 0.5rem;
    margin-right: 0.5rem;
  }
  .title {
    flex: 1;
  }
  .price {
    color: #478d3c;
  }
`;

export const Book = ({ book, onAdd }: BookProps) => {
  return (
    <StyledBook>
      <span className="title">
        {book.title} by <em>{book.author}</em>{' '}
      </span>
      <span className="price">${book.price}</span>{' '}
      <Button onClick={() => onAdd(book)}>Add to Cart</Button>
    </StyledBook>
  );
};

export default Book;
