import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Div = styled.div`
  margin: 2rem;
  padding: 2rem;
  main {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
`;

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItem = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`, {
      mode: 'cors',
    });
    const items = await response.json();
    setData([...items]);
    console.log(data[0].rating.rate);
  };

  return (
    <Div>
      <h1>Products</h1>
      <main>
        {data.map((obj, i) => (
          <Card info={obj} key={i} />
        ))}
      </main>
    </Div>
  );
}

export default Product;
