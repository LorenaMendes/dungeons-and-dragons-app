import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://www.dnd5eapi.co/api/classes/'
    );
    
    const items = await data.json();
    setItems(items.results);
  };


  return (
      <div>
          {items.map(item => (
            <h1 key={item.index}>
              <Link to={`/shop/${item.index}`}>{item.name}</Link>
            </h1>
          ))}
      </div>
  );
}

export default Shop;
