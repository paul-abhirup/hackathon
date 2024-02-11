import Link from 'next/link';
import React from 'react';
import { UserAuth } from "../context/AuthContext" ;

export default function Header() {

  const {user} = UserAuth();
  
  return (
    <header className="flex items-center justify-between">
      <Link className="text-green-500 font-bold text-2xl" href={'/'}> Waste Management </Link>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={'/'}>Home</Link>
        <Link href={''}>Recycle Items</Link>
        <Link href={''}>Services</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        </nav>
        <nav>
        <Link href={'/login'}>Sign In</Link>
        <Link href={'/register'}><button className="bg-green-500 text-white px-4 py-2 rounded-md"> Register </button>
        </Link>
      </nav>
    </header>
  );
}
