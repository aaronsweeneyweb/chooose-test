import { useState, useEffect } from 'react';
import axios from 'axios';
import { TripItemProps } from '../types';

const Home = () => {
  const [ data, setData ] = useState<TripItemProps[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/trips');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default Home