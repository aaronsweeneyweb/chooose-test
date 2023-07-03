import { TripItemProps } from '../types';
import StarRatings from 'react-star-ratings';
import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

const STAR_CONFIG = {
  color: '#F9D110',
  total: 5,
  name: 'rating',
  dimension: '20px',
  spacing: '0px'
}

const subscriptChar = '\u2082'

const getSubtitle = (countries: number, days: number) => {
  const countryString = countries > 1 ? 'countries' : 'country';
  const daysString = days > 1 ? 'days' : 'day';

  return `${countries} ${countryString}, ${days} ${daysString}`;
}

const TripItem = (item: TripItemProps) => {
  const subtitle = getSubtitle(item.countries, item.days);

  return (
    <Box
      width={['full', '378px']}
      borderRadius='18px'
      bg='#FFFFFF'
      overflow='hidden'
      margin={['16px 0', '16px']}
      padding='9px'
      boxShadow='0px 0px 10px 4px rgba(0, 0, 0, 0.1)'
    >
      <Box
        height='280px'
        width='100%'
        color='white'
        backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${item.imageUrl})`}
        backgroundSize='cover'
        backgroundPosition='center'
        borderRadius='14px'
      >
        <Box height='100%'>
          <Flex
            direction='column'
            align='center'
            justify='flex-end'
            height='100%'
          >
            <Heading
              as='h3'
              fontSize='22px'
              fontWeight='600'
              padding='0px 40px'
              textAlign='center'
              lineHeight='1.2'
              marginBottom='2px'
              noOfLines={{ base: 2 }}
            >
              {item.title}
            </Heading>
            <Text
              fontSize='12px'
              fontWeight='500'
              marginBottom='14px'
            >
              {subtitle}
            </Text>
            <Box
              width='75%'
              backgroundColor='#1F2838'
              borderRadius='12px'
              padding={['6px 12px', '12px']}
              marginBottom='26px'
            >
              <Flex
                direction={['column', 'row']}
                justify='space-between'
                align='center'
                fontSize='14px'
                fontWeight='500'
                textAlign='center'
              >
                <Box>Emissions offset: </Box>
                <Box>{`${item.emissionsValue} ${item.emissionsUnit} CO${subscriptChar}e`}</Box>
              </Flex>
            </Box>
            <Box
              width='75%'
              color='black'
              backgroundColor='white'
              borderRadius='12px 12px 0 0'
              padding={['6px 6px 0', '12px 24px']}
            >
              <Flex
                direction={['column', 'row']}
                align='center'
                justify='space-between'
              >
                <Text
                  fontSize='12px'
                  fontWeight='500'
                >
                  Trip rating
                </Text>
                <Flex
                  direction={['column', 'row']}
                  align='center'
                >
                  <Box height='28px'>
                    <StarRatings
                      rating={item.rating}
                      starRatedColor={STAR_CONFIG.color}
                      numberOfStars={STAR_CONFIG.total}
                      name={STAR_CONFIG.name}
                      starDimension={STAR_CONFIG.dimension}
                      starSpacing={STAR_CONFIG.spacing}
                    />
                  </Box>
                  <Text
                    fontSize='16px'
                    fontWeight='600'
                  >
                    {item.rating}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default TripItem