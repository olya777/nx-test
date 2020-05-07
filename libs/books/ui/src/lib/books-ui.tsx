import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BooksUiProps {}

const StyledBooksUi = styled.div`
  color: pink;
`;

export const BooksUi = (props: BooksUiProps) => {
  return (
    <StyledBooksUi>
      <h1>Welcome to books-ui component!</h1>
    </StyledBooksUi>
  );
};

export default BooksUi;
