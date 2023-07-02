import { useState, useEffect } from 'react';
import axios from 'axios';
import TripItemList from './TripItemList';
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
      <TripItemList trips={data}/>
    </div>
  )
}

export default Home