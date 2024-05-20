import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="w-full h-[75px] bg-black px-6 flex items-center justify-between">
      <Image 
        src="/logo.png"
        width={127.74}
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