import TripItem from './TripItem';
import { TripItemProps } from '../types';
import { Flex } from '@chakra-ui/react';

type TripItemListProps = {
  trips: TripItemProps[];
};

const TripItemList: React.FC<TripItemListProps> = ({ trips }) => {

  return (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
    >
      {trips.map((item: TripItemProps) => (
        <TripItem
          key={item.id}
          id={item.id}
          title={item.title}
          countries={item.countries}
          days={item.days}
          emissionsValue={item.emissionsValue}
          emissionsUnit={item.emissionsUnit}
          rating={item.rating}
          imageUrl={item.imageUrl}
        />
      ))}
    </Flex>
  )
}

export default TripItemList