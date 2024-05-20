'use client'
import Image from "next/image"
import { useState } from "react"

 export default function Carousel({ slides }: { slides: string[] }) {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className="overflow-hidden relative mb-8 h-72">
      <div
        className={`flex transition ease-out duration-75 translate-x-[-${current * 100}]`}
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {slides.map((s: string) => <img key={s} src={s} alt="Picture" className="h-full object-cover" />)}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex">
        <Image
          onClick={previousSlide}
          width={40}
          height={40}
          src="/arrow-left.png"
          alt="left"
          />
        <Image
          onClick={nextSlide}
          width={40}
          height={40}
          src="/arrow-right.png"
          alt="right"
          />
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s,i) => (
          <div
            key={"circle" + i}
            className={`rounded-full w-3 h-3 ${i == current ? 'bg-white' : 'bg-gray-500 opacity-40'}`}
          >
          </div>
        ))}
      </div>
    </div>
  )
}