import Restaurant from '../Restaurant'

export function Main({ restaurants }) {
  return (
    <main className="container w-full mx-auto py-8 pt-4 min-h-[calc(100vh_-_65px)]">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.item_id} />
        ))}
      </ul>
    </main>
  )
}
