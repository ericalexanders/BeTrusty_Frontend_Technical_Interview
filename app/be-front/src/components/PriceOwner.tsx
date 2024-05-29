'use client'
import { DateRange } from "react-date-range";
import { format, differenceInDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import Image from "next/image"
import { useState, useRef, useEffect } from "react";

export default function PriceOwner({ price }: { price: number }) {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  })
  const [showInputDate, setShowInputDate] = useState(false)
  const [totalPrice, setTotalPrice] = useState(price * (Number(differenceInDays(selectionRange.endDate, selectionRange.startDate)) || 1))
  const ref = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true);

  const handleSelect = (ranges: any) => {
    setSelectionRange(ranges.range1)
    setShowInputDate(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowInputDate(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    if (!isFirstRender.current) {
      setTotalPrice(price * (Number(differenceInDays(selectionRange.endDate, selectionRange.startDate)) || 1))
    } else {
      isFirstRender.current = false;
    }
  }, [selectionRange, price]);

  return (
    <div ref={ref} className="relative">
      <div className="md:w-[320px] h-[356px] text-center mb-8 border-[0.5px] border-gray -600 rounded-xl grid grid-cols-1 grid-rows-5 overflow-hidden">
        <div className="border-[0.5px] border-gray-600 flex items-center justify-center">
          <div className="mr-4">
            <h2 className="text-2xl font-semibold text-center">${price} USD por noche</h2>
            <p className="font-normal text-base text-center">Precio por habitación</p>
          </div>
          <Image width={42} height={42} src="/pencil.png" alt="pencil" className="object-cover h-[32px]" />
        </div>
        <div className="grid grid-cols-2 cursor-pointer" onClick={() => setShowInputDate(!showInputDate)}>
          <div className="border-[0.5px] border-gray-600 flex flex-col justify-center">
            <p>CHECK-IN</p>
            <span>{format(selectionRange.startDate, 'dd/MM/yyyy')}</span>
          </div>
          <div className="border-[0.5px] border-gray-600 flex flex-col justify-center">
            <p>CHECK-OUT</p>
            <span>{format(selectionRange.endDate, 'dd/MM/yyyy')}</span>
          </div>
        </div>
        <div className="border-[0.5px] border-gray-600 text-base font-normal flex flex-col justify-center">Cantidad de dias: {differenceInDays(selectionRange.endDate, selectionRange.startDate)}</div>
        <div className="border-[0.5px] border-gray-600 flex flex-col justify-center">Depósito reembolsable: ${totalPrice}</div>
        <div className="border-[0.5px] border-gray-600 flex flex-col justify-center">Ingreso total: ${totalPrice} USD</div>
      </div>
      {showInputDate && <div className="absolute top-2 rounded-md overflow-hidden">
        <DateRange
          ranges={[selectionRange]}
          onChange={handleSelect}
          dateDisplayFormat="dd/MM/yyyy"
        />
      </div>}
    </div>
  )
}