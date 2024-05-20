'use client'
import Image from "next/image";

import { Carousel, PriceOwner } from "@/components"
import useMediaQuery from "@/hooks/useMediaQuery";

import locationIcon from '@/assets/location.svg'
import typeProperty from "@/assets/type-property.svg"
import bedIcon from "@/assets/bed.svg"
import baththub from "@/assets/bathtub.svg"
import wifiIcon from "@/assets/wifi.svg"
import carIcon from "@/assets/car.svg"

const images = [
  'https://static1.sosiva451.com/45857651/cb377b99-59c9-46f8-ae3f-6158b875893e_u_large.jpg',
  'https://static1.sosiva451.com/45857651/b823bc6d-f228-4cc6-bcc0-b7254d007929_u_large.jpg',
  'https://static1.sosiva451.com/45857651/2fb9aed9-64fd-41fc-ae0c-5ba7b3f1c211_u_large.jpg',
  'https://static1.sosiva451.com/45857651/616d504f-5149-45d1-8262-3b9f16744ef3_u_large.jpg',
  'https://static1.sosiva451.com/45857651/2236d195-3b3c-4891-ac31-5022e4471f11_u_large.jpg',
];

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <div className="pb-24 md:pb-6">
      <div className="py-5 px-4 flex justify-between items-center">
        <h2 className="font-bold text-2xl">Frank Apart</h2>
        <div className="flex items-center gap-2">
          <Image width={45} height={45} src="/like.png" alt="Main" />
          <Image width={45} height={45} src="/share.png" alt="Main" />
        </div>
      </div>

      <div className="-mx-6 md:mx-0 mb-8 md:flex md:flex-wrap box-border gap-4">
        {isDesktop 
          ? (
            <>
              <div className="flex-grow">
                <Image width={600} height={400} src={images[0]} alt="Main" className="w-full object-cover h-full" />
              </div>
              <div className="w-1/2 flex flex-wrap gap-4">
                {images.slice(1, 5).map((image, index) => (
                  <div key={index} className="w-[48%] flex-grow flex-shrink">
                    <Image width={600} height={400} src={image} alt="Main" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </>
          )
          : <Carousel slides={images} />
        }
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:flex-1">
          <div className="mb-4">
            <Image src={locationIcon} className="inline-block" alt="location" /> Av. San Martin 315, Mendoza, Argentina
          </div>
          <div className="mb-4">
            <Image src={typeProperty} className="inline-block" alt="location" /> Departamento
          </div>
          <div className="mb-4">
            <Image src={bedIcon} className="inline-block" alt="location" /> 3 habitaciones
          </div>
          <div className="mb-4">
            <Image src={baththub} className="inline-block" alt="location" /> 1 Baño
          </div>
          <div className="mb-4">
            <Image src={wifiIcon} className="inline-block" alt="location" /> Wifi
          </div>
          <div className="mb-4">
            <Image src={carIcon} className="inline-block" alt="location" /> Estacionamiento gratuito
          </div>
          <div className="md:w-[70%]">
            <h3 className="font-bold text-lg mb-4">Descripción</h3>
            Este hermoso apartamento de 2 habitaciones se encuentra en el corazón de la ciudad, 
            a solo unos pasos de los mejores restaurantes, tiendas y lugares de interés turístico. 
            El apartamento es ideal para aquellos que buscan un espacio cómodo y acogedor en el que
            relajarse después de un largo día de trabajo o de turismo.
            <h3 className="font-bold text-lg my-4">Propietario</h3>
            <Image width={50} height={50} src="/elon-picture.png" className="inline-block" alt="location" /> Elon Musk
          </div>
        </div>
        
        <div className="mb-8">
          <PriceOwner />
          <button className="w-full bg-betwo rounded-3xl py-3 text-black text-base md:cursor-pointer hover:opacity-75">
            Invitar inquilino
          </button>
        </div>
      </div>
    </div>
  );
}
