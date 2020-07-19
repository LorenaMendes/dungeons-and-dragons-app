import React, {useState, useEffect} from 'react';

import { Image } from './styles';

function ClassDetail({match}) {

  useEffect(() => {
      fetchItem();
      console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
        `https://www.dnd5eapi.co/api/classes/${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
  }

  return (
      <div>
          <h1>{item.name}</h1>
          <h1>{item.hit_die}</h1>
          <Image src={require(`../../assets/images/${match.params.id}-f.png`)}></Image>
          <Image src={require(`../../assets/images/${match.params.id}-m.png`)}></Image>
      </div>
  );
}

export default ClassDetail;
