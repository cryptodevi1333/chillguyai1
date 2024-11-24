'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? memes.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === memes.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <h3 className="font-luckiest-guy text-3xl text-white mb-6 text-center">Chill Meme Gallery</h3>
      <div className="relative">
        <div className="relative w-full h-auto">
          <Image
            src={memes[currentIndex].src}
            alt={memes[currentIndex].alt}
            width={400}
            height={300}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-[#52afe6]" />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-[#52afe6]" />
        </button>
      </div>
      <p className="text-center text-white mt-2">
        {currentIndex + 1} / {memes.length}
      </p>
    </div>
  )
}

