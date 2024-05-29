import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="w-full h-[4.2rem] bg-black px-6 flex items-center justify-between">
      <Image 
        src="/logo.png"
        width={127}
        height={35}
        alt="Logo" />
      <Image 
        src="/avatar.png"
        width={45}
        height={45}
        alt="Logo" />
    </header>
  )
}