import Link from 'next/link'

export function Footer() {
  return (
    <footer className="container w-full mx-auto border-t border-gray-200 dark:border-gray-800 py-5">
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 transition">
              Головна
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/visitable" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 transition">
              Тут Мак працює
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="https://t.me/mc_donalds_che" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-600 transition">
              Телеграм бот
            </a>
          </Link>
        </div>
      </div>
      <p className="text-gray-500 hover:text-gray-600 transition">
        Made with 🍔 by Alex
      </p>
    </footer>
  )
}
