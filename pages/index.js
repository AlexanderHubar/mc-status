import Head from 'next/head'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { getBaseUrl } from '../utils/getBaseUrl'

export async function getServerSideProps({ req }) {
  const baseUrl = getBaseUrl(req)

  const res = await fetch(baseUrl + '/api/resources')
  const json = await res.json()

  return {
    props: {
      restaurants: json.restaurants,
      cities: json.cities,
    },
  }
}

export default function Home(props) {
  const restaurants = props.restaurants[39]

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Head>
        <title>McDonald's 🍔 статус Черкаси</title>
        <meta
          name="description"
          content="Сайт на якому можна переглянути чи працює McDonald's в Черкасах"
        />
        <link
          rel="icon"
          href="https://cdn.iconscout.com/icon/free/png-256/mcdonalds-3384870-2822951.png"
        />
      </Head>

      <Header title="McDonald's 🍔 статус в Черкасах" />
      <Main restaurants={restaurants} />
      <Footer />
    </div>
  )
}
