import Image from 'next/image'

const memes = [
  { src: "https://i.postimg.cc/d39sLbn3/meme1.webp", alt: "Meme 1" },
  { src: "https://i.postimg.cc/c4s1VJ4n/meme2.webp", alt: "Meme 2" },
  { src: "https://i.postimg.cc/P5JX5FDf/meme3.webp", alt: "Meme 3" },
  { src: "https://i.postimg.cc/VLDs1cdH/meme4.webp", alt: "Meme 4" },
  { src: "https://i.postimg.cc/fRPwtj7c/meme5.webp", alt: "Meme 5" },
  { src: "https://i.postimg.cc/yNS7Fgnw/meme6.webp", alt: "Meme 6" },
  { src: "https://i.postimg.cc/SRV4yWNz/meme7.webp", alt: "Meme 7" },
  { src: "https://i.postimg.cc/wvXHGCC2/meme8.webp", alt: "Meme 8" },
  { src: "https://i.postimg.cc/4yXZk8Zg/meme9.webp", alt: "Meme 9" },
  { src: "https://i.postimg.cc/h40cbqbP/meme10.webp", alt: "Meme 10" },
]

export default function MemeGallery() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="font-luckiest-guy text-3xl text-white mb-6 text-center">Chill Meme Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {memes.map((meme, index) => (
          <div key={index}>
            <Image
              src={meme.src}
              alt={meme.alt}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

