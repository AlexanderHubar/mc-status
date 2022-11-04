import Link from 'next/link'

export function Header({ title }) {
  return (
    <header className="container w-full mx-auto pt-8">
      <Link href="/" legacyBehavior>
        <a>
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white mb-8">
            {title}
          </h1>
        </a>
      </Link>
    </header>
  )
}
