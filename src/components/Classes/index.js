import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from './styles';

function Classes() {

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

  const navStyle = {
    color: 'black',
  }

  return (
  <Container>
      <Table>
        
          {items.map(item => (
            <tr key={item.index}>
              <Link style={navStyle} to={`/classes/${item.index}`}>{item.name}</Link>
            </tr>
          ))}

      </Table>
    </Container>
  );
}

export default Classes;
