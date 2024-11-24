import Image from 'next/image'

export default function AboutChillGuy() {
  return (
    <section className="w-full max-w-4xl mx-auto mb-12">
      <h2 className="font-luckiest-guy text-4xl text-white mb-6 text-center">About Chill Guy</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="https://i.postimg.cc/L4k6CPRS/2.webp"
            alt="Chill Guy"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-center">
            <h3 className="font-luckiest-guy text-4xl text-[#e55d2d] mb-4">Buy Chill Guy AI</h3>
            <p className="font-indie-flower text-xl text-white">
              Chill Guy is all about keeping it cool and relaxed. Whether he's lounging by the pool or hanging out with friends,
              he's always ready with a laid-back attitude and a good vibe. Chat with Chill Guy AI to get a taste of the chill life!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

