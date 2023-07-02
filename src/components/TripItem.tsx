import { TripItemProps } from '../types';
import StarRatings from 'react-star-ratings';

const STAR_CONFIG = {
  color: '#F9D110',
  total: 5,
  name: 'rating',
  dimension: '20px',
  spacing: '0px'
}

const getSubtitle = (countries: number, days: number) => {
  const countryString = countries > 1 ? 'countries' : 'country';
  const daysString = days > 1 ? 'days' : 'day';

  return `${countries} ${countryString}, ${days} ${daysString}`;
}

const TripItem = (item: TripItemProps) => {
  const subtitle = getSubtitle(item.countries, item.days);

  return (
    <div>
      <div>{item.title}</div>
      <div>{subtitle}</div>
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