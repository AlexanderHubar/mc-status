import Link from 'next/link'

import Restaurant from '../Restaurant'

export function Main({ restaurants }) {
  const mcClosedClasses = restaurants ? '' : 'flex items-center justify-center'

  return (
    <main
      className={`container w-full mx-auto py-8 pt-4 min-h-[calc(100vh_-_177px)] ${mcClosedClasses}`}
    >
      {restaurants ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurants.map((restaurant) => (
            <Restaurant restaurant={restaurant} key={restaurant.item_id} />
          ))}
        </ul>
      ) : (
        <div className="text-center">
          <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            На жаль, Мак в Черкасах ще не відкрився...
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Але Ви можете переглянути місця де він вже{' '}
            <Link href="/visitable" legacyBehavior>
              <a className="text-gray-900 dark:text-gray-100 underline">
                працює
              </a>
            </Link>
          </p>
        </div>
      )}
    </main>
  )
}
