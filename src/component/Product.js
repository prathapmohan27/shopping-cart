import React, { useEffect, useState } from 'react';

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`, {
        mode: 'cors',
      });
      if (response.ok) {
        const items = await response.json();
        setData(...items);
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}

export default Product;
