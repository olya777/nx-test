import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BooksFeatureProps {}

const StyledBooksFeature = styled.div`
  color: pink;
`;

export const BooksFeature = (props: BooksFeatureProps) => {
  return (
    <StyledBooksFeature>
      <h1>Welcome to books-feature component!</h1>
    </StyledBooksFeature>
  );
};

export default BooksFeature;
