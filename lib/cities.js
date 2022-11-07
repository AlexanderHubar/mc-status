export async function getAllCitiesIds() {
  const res = await fetch(process.env.API_DOMAIN + '/api/resources')
  const json = await res.json()

  return Object.keys(json.cities).map((cityId) => {
    return {
      params: {
        id: cityId,
      },
    }
  })
}
