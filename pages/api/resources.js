import fetch from 'node-fetch';

const MC_URL = 'https://ukraine.mcdonalds.ua/ukr/mcmode/'

const RESOURCE = {
  restaurants: 'restaurants',
  cities: 'cities'
}

const getResource = (str, resource) => {
  const resourceRegex = resource === RESOURCE.restaurants ? 'var restaurants = JSON.parse(\'' : 'var cities = JSON.parse(\''
  if (str) {
    const sanitizedString = str.replace(resourceRegex, '').replace("\\'", '').slice(0, -2)
    return JSON.parse(sanitizedString)
  }

  return  {}
}

const restaurantsRegExp = /var restaurants = JSON.parse\('(.*?)\'\)/g
const citiesRegExp = /var cities = JSON.parse\('(.*?)\'\)/g

export default async function handler(req, res) {
  const response = await fetch(MC_URL);
  const body = await response.text();

  const restaurants = getResource(body.match(restaurantsRegExp)[0], RESOURCE.restaurants)
  const cities = getResource(body.match(citiesRegExp)[0], RESOURCE.cities)

  res.status(200).json({
    restaurants,
    cities
  })
}
