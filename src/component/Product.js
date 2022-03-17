import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Loader } from '../style/productStyle';
import { Link } from 'react-router-dom';
const Div = styled.div`
  margin: 2rem;
  padding: 2rem;
  position: relative;
  main {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 1rem;
  }
`;

function Product() {
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`, {
        mode: 'cors',
      });
      const items = await response.json();
      new Promise(() => {
        setTimeout(setLoading(false), 500);
      }).then(setData([...items]));
    } catch (error) {
      alert(error);
    }
  };

  const renderLoader = () => {
    return loading ? <Loader /> : null;
  };
  return (
    <Div>
      <h1>Products</h1>
      {renderLoader()}
      <main>
        {data.map((obj, i) => (
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={`/product/${obj.id}`}
            key={i}
          >
            <Card info={obj} />
          </Link>
        ))}
      </main>
    </Div>
  );
}

export default Product;
