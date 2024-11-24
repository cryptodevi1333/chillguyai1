import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative">
      <Image
        src="https://i.postimg.cc/hvn44DLN/5.webp"
        alt="Chill Guy AI Footer"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-indie-flower text-2xl text-white">Stay cool and chat with Chill Guy AI!</p>
      </div>
    </footer>
  )
}

