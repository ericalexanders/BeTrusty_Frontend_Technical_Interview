'use client'
import Image from "next/image";

import { PriceOwner, Gallery } from "@/components"

import locationIcon from '@/assets/location.svg'
import typeProperty from "@/assets/type-property.svg"
import bedIcon from "@/assets/bed.svg"
import baththub from "@/assets/bathtub.svg"
import wifiIcon from "@/assets/wifi.svg"
import carIcon from "@/assets/car.svg"

import { apartment } from "@/mock"

export default function Home() {
  
  return (
    <div className="pb-24 md:pb-6">
      <div className="py-5 px-4 flex justify-between items-center">
        <h2 className="font-bold text-2xl">Frank Apart</h2>
        <div className="flex items-center gap-2">
          <Image width={40} height={40} src="/like.png" alt="Main" />
          <Image width={40} height={40} src="/share.png" alt="Main" />
        </div>
      </div>

      <div className="-mx-6 md:mx-0 mb-8 md:flex box-border gap-4">
        <Gallery images={apartment.images} />
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:flex-1">
          <div className="mb-4">
            <Image src={locationIcon} className="inline-block" alt="location" /> {apartment.address}
          </div>
          <div className="mb-4">
            <Image src={typeProperty} className="inline-block" alt="location" /> {apartment.typeProperty}
          </div>
          <div className="mb-4">
            <Image src={bedIcon} className="inline-block" alt="location" /> {apartment.bed}
          </div>
          <div className="mb-4">
            <Image src={baththub} className="inline-block" alt="location" /> {apartment.bathroom}
          </div>
          {apartment.wifi && <div className="mb-4">
            <Image src={wifiIcon} className="inline-block" alt="location" /> Wifi
          </div>}
          {apartment.garage && <div className="mb-4">
            <Image src={carIcon} className="inline-block" alt="location" /> Estacionamiento gratuito
          </div>}
          <div className="md:w-[70%]">
            <h3 className="font-bold text-lg mb-4">Descripción</h3>
            {apartment.description}
            <h3 className="font-bold text-lg my-4">Propietario</h3>
            <Image width={50} height={50} src="/elon-picture.png" className="inline-block" alt="location" /> Elon Musk
          </div>
        </div>
        
        <div className="mb-8">
          <PriceOwner price={apartment.price} />
          <button className="w-full bg-betwo rounded-3xl py-3 text-black text-base md:cursor-pointer hover:opacity-75">
            Invitar inquilino
          </button>
        </div>
      </div>
    </div>
  );
}
