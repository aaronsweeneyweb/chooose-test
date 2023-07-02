import TripItem from "./TripItem";
import { TripItemProps } from "../types";

type TripItemListProps = {
  trips: TripItemProps[];
};

const TripItemList: React.FC<TripItemListProps> = ({ trips }) => {

  return (
    <>
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
    </>
  )
}

export default TripItemList