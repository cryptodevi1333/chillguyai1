import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative">
      <Image
        src="https://i.postimg.cc/wjnQWZc7/1.png"
        alt="Chill Guy AI Banner"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
      <nav className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-lg p-2 border-2 border-white">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="font-luckiest-guy text-lg text-[#52afe6] hover:text-[#e55d2d]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-luckiest-guy text-lg text-[#52afe6] hover:text-[#e55d2d]">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-luckiest-guy text-lg text-[#52afe6] hover:text-[#e55d2d]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

