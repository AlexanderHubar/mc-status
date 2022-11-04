import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { getBaseUrl } from '../utils/getBaseUrl'

export async function getServerSideProps() {
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

export default function Home({ cities, restaurants }) {
  console.log(restaurants)
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

      <Header title="McDonald's 🍔 статус" />
      <main className="container w-full mx-auto py-8 pt-4 min-h-[calc(100vh_-_177px)]">
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Список місць де Мак працює
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Юхуу! Вам пощастило, якщо ви є в цьому списку.
        </p>
        <ul>
          {Object.keys(cities).map((key, index) => {
            const city = cities[key]

            return (
              <div
                key={city.item_id}
                className="flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8"
              >
                <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
                  {index + 1}
                </p>
                <div className="flex flex-col pl-3">
                  <Link
                    href={{
                      pathname: '/city/[id]',
                      query: { id: city.item_id },
                    }}
                    legacyBehavior
                  >
                    <a className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full">
                      {city.title}
                    </a>
                  </Link>
                  <p
                    className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                  >
                    {city.alias}
                  </p>
                </div>
              </div>
            )
          })}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
