import Link from 'next/link'
import Image from 'next/image'

export function Header({ title }) {
  return (
    <>
      <aside className="container w-full mx-auto py-8">
        <a
          href="https://savelife.in.ua/donate/#donate-army-card-monthly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="ml-auto"
            width={150}
            height={60}
            src="/logoback.svg"
            alt="Логотип Повернись живим"
          />
        </a>
      </aside>
      <header className="container w-full mx-auto pt-8">
        <Link href="/" legacyBehavior>
          <a>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white mb-8">
              {title}
            </h1>
          </a>
        </Link>
      </header>
    </>
  )
}
