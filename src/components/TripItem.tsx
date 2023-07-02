import { TripItemProps } from '../types';
import StarRatings from 'react-star-ratings';

const STAR_CONFIG = {
  color: '#F9D110',
  total: 5,
  name: 'rating',
  dimension: '20px',
  spacing: '0px'
}

const TripItem = (item: TripItemProps) => {

  return (
    <div>
      <div>{item.title}</div>
      <div>{item.countries}</div>
      <div>{item.days}</div>
      <StarRatings
        rating={item.rating}
        starRatedColor={STAR_CONFIG.color}
        numberOfStars={STAR_CONFIG.total}
        name={STAR_CONFIG.name}
        starDimension={STAR_CONFIG.dimension}
        starSpacing={STAR_CONFIG.spacing}
      />
      <div>{item.rating}</div>
    </div>
  )
}

export default TripItem