'use client'
import Image from "next/image";
import Carousel from "./Carousel";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Gallery({ images }: { images: string [] }) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  if (!isDesktop) return <Carousel slides={images} />
  return (
    <>
      <div className="w-full md:w-1/2 flex-grow">
        <Image width={640} height={480} src={images[0]} alt="Main" className="w-full object-cover h-full" />
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
        {images.slice(1, 5).map((image, index) => (
          <div key={index}>
            <Image width={640} height={480} src={image} alt="Main" className="w-full h-full" />
          </div>
        ))}
      </div>
    </>
  )
}