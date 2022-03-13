import styled from 'styled-components';

export const Div = styled.div`
  box-shadow: 0px 0.2rem 0.5rem rgb(0, 0, 0);
  width: 15rem;
  padding: 0.8rem;
  cursor: pointer;
  overflow: visible;
  img {
    width: 100%;
    height: 15rem;
  }
  section {
    padding: 0.5rem;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 1.5rem;
  }
  span {
    color: #c2c0ba;
    font-size: 1rem;
  }
`;
export const Price = styled.p`
  color: green;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const Rating = styled(Price)`
  color: black;
`;
