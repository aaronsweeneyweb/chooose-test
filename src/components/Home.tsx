import { useState, useEffect } from 'react';
import axios from 'axios';
import TripItemList from './TripItemList';
import { TripItemProps } from '../types';
import { Container, Box, Spinner, Center, Text } from '@chakra-ui/react';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [ data, setData ] = useState<TripItemProps[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios('http://localhost:3001/trips');
        setData(result.data);
        setLoading(false);
      } catch (err: any) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container
      maxW='full'
      padding='0px'
    >
      {loading &&
        <Box
          position='fixed'
          top='0'
          right='0'
          bottom='0'
          left='0'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Spinner data-testid='loading-spinner'/>
        </Box>
      }

      {(!loading && error) && <Center>{'An error has occurred while fetching data.'}</Center>}

      {(!loading && !error) && <TripItemList trips={data}/>}
    </Container>
  )
}

export default Home