'use client'
import Image from "next/image"
import { useState } from "react"

const menu = [
  {
    title: 'Home',
    icon: '/home.png',
    mobile: true
  },
  {
    title: 'Identification',
    icon: '/identification.png',
    mobile: false
  },
  {
    title: 'Dashboard',
    icon: '/dashboard.png',
    mobile: true
  },
  {
    title: 'Qr Code',
    icon: '/qrcode.png',
    mobile: true
  },
  {
    title: 'Key',
    icon: '/key.png',
    mobile: false
  },
  {
    title: 'Notifications',
    icon: '/notifications.png',
    mobile: true
  }
]


export default function Sidebar() {
  const [open, setOpen] = useState<Boolean>(false)
  return (
    <nav className={`h-20 fixed md:relative bottom-0 w-full ${open ? 'md:w-72' : 'md:w-20'} duration-300 md:h-screen bg-black py-6 px-6`}>
      <Image
        src="/menu.png"
        width={30}
        height={30}
        alt="menu picture"
        className="hidden border-b-2 pb-2 mb-10 md:block md:cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      <ul className="flex justify-around md:flex-col md:justify-start">  
        {menu.map(item => (
          <li key={item.title} className="flex items-center md:cursor-pointer md:mb-6">
            <Image
              src={item.icon}
              height={35}
              width={35}
              alt="menu picture"
              className={`${!item.mobile && 'hidden'} md:block ${open && 'md:mr-4'}`}
            />
            <span className={`hidden ${open ? 'md:block' : 'md:hidden'} origin-left duration-300`}>{item.title}</span>
          </li>
        ))}
        <li className="flex items-center md:cursor-pointer md:mb-6 md:absolute md:bottom-0">
          <Image
            src="/settings.png"
            width={35}
            height={35}
            alt="menu picture"
            className={`md:block ${open && 'md:mr-4'}`}
          />
          <span className={`hidden ${open ? 'md:block' : 'md:hidden'} origin-left duration-300`}>Settings</span>
        </li>
      </ul>
    </nav>
  )
}