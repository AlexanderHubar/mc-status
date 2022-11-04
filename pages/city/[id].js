import Head from 'next/head'

import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'

import { getBaseUrl } from '../../utils/getBaseUrl'

export async function getServerSideProps({ req, params }) {
  const baseUrl = getBaseUrl(req)

  const res = await fetch(baseUrl + '/api/resources')
  const json = await res.json()

  const restaurants = json.restaurants[params.id]

  if (!restaurants) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      restaurants: json.restaurants[params.id],
      city: json.cities[params.id],
    },
  }
}

export default function Home({ city, restaurants }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Head>
        <title>McDonald's 🍔 статус</title>
        <meta
          name="description"
          content="Сайт на якому можна переглянути чи працює McDonald's у вашому місті"
        />
        <link
          rel="icon"
          href="https://cdn.iconscout.com/icon/free/png-256/mcdonalds-3384870-2822951.png"
        />
      </Head>

      <Header title={`McDonald's 🍔 статус ${city.title}`} />
      <Main restaurants={restaurants} />
      <Footer />
    </div>
  )
}
