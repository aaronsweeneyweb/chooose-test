import { TripItemProps } from '../types';

const TripItem = (item: TripItemProps) => {

  return (
    <div>
      <div>{item.title}</div>
      <div>{item.countries}</div>
      <div>{item.days}</div>
      <div>{item.rating}</div>
    </div>
  )
}

export default TripItem