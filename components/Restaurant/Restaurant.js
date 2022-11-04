import { isTruthy } from './helpers'

export function Restaurant({ restaurant }) {
  const hasDelivery = isTruthy(restaurant.delivery)
  const isVisitable = isTruthy(restaurant.visitable)

  const renderDelivery = hasDelivery && (
    <img
      className="rounded-full h-6 w-6"
      src="https://www.freelogovectors.net/svg07/glovo-logo.svg"
    />
  )

  const renderVisitable = isVisitable && (
    <p className="text-2xl leading-none">🍔</p>
  )

  return (
    <li className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <span className="flex items-start">
        <h2 className="text-lg w-fit inline md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight mr-2">
          {restaurant.title}
        </h2>
        <div className="ml-auto flex gap-2">
          {renderVisitable}
          {renderDelivery}
        </div>
      </span>
      <p className="text-gray-700 dark:text-gray-400">
        Адреса: {restaurant.address}
      </p>
      <p className="text-gray-700 dark:text-gray-400">
        Час роботи: {restaurant.worktime}
      </p>
    </li>
  )
}
