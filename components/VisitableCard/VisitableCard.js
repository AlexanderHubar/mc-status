import Link from 'next/link'

export function VisitableCard({ city, index }) {
  return (
    <div className="flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8">
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
          <a className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full hover:underline">
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
}
