import Image from "next/image"

export default function PriceOwner() {
  return (
    <div className="md:w-[320px] h-[356px] text-center mb-8 border-[0.5px] border-gray-600 rounded-xl grid grid-cols-1 grid-rows-5 overflow-hidden">
      <div className="border-[0.5px] border-gray-600 flex flex-col justify-center">
        <div className="mr-4">
          <h2 className="text-2xl font-semibold text-center">${40} USD por noche</h2>
          <p className="font-normal text-base text-center">Precio por habitación</p>
        </div>
        {/* <Image width={32} height={32} src="/pencil.png" alt="pencil" className="object-cover h-[32px]" /> */}
      </div>
      <div className="grid grid-cols-2">
        <div className="border-[0.5px] border-gray-600 flex flex-col justify-center">
          <p>CHECK-IN</p>
          <span>dd/mm/aaaa</span>
        </div>
        <div className="border-[0.5px] border-gray-600 flex flex-col justify-center">
          <p>CHECK-OUT</p>
          <span>dd/mm/aaaa</span>
        </div>
      </div>
      <div className="border-[0.5px] border-gray-600 text-base font-normal flex flex-col justify-center">Cantidad de dias: {0}</div>
      <div className="border-[0.5px] border-gray-600 flex flex-col justify-center">Depósito reembolsable: $60</div>
      <div className="border-[0.5px] border-gray-600 flex flex-col justify-center">Ingreso total: $0 USD</div>
    </div>
  )
}