import { getBaseUrl } from '../utils/getBaseUrl'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VisitableCard from '../components/VisitableCard'

export async function getServerSideProps({ req }) {
  const baseUrl = getBaseUrl(req)

  const res = await fetch(baseUrl + '/api/resources')
  const json = await res.json()

  return {
    props: {
      cities: json.cities,
    },
  }
}

export default function Home({ cities }) {
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
          Юхуу! Вам пощастило, якщо ви є в цьому списку. Натисни на назву міста,
          щоб побачити детальну інформацію. 👇
        </p>
        <ul>
          {Object.keys(cities).map((key, index) => {
            const city = cities[key]

            return (
              <VisitableCard key={city.item_id} index={index} city={city} />
            )
          })}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
