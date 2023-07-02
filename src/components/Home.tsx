import { useState, useEffect } from 'react';
import axios from 'axios';
import TripItemList from './TripItemList';
import { TripItemProps } from '../types';
import { Container } from "@chakra-ui/react";

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
    <Container
      maxW="full"
      padding="0px"
    >
      <TripItemList trips={data}/>
    </Container>
  )
}

export default Home