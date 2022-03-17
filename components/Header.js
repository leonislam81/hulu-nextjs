import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";import React from 'react'
import HeaderItem from './HeaderItem'
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row py-6 justify-between items-center">
        <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Title="Home" Icon={HomeIcon}  />
        <HeaderItem Title="Trending" Icon={LightningBoltIcon}  />
        <HeaderItem Title="Verified" Icon={BadgeCheckIcon}  />
        <HeaderItem Title="Collections" Icon={CollectionIcon}  />
        <HeaderItem Title="Search" Icon={SearchIcon}  />
        <HeaderItem Title="Account" Icon={UserIcon}  />
        </div>

        <div className="text-center self-start">
            <Link href="/"><h2 className="text-2xl cursor-pointer">LOGO</h2></Link>
        </div>
    </header>
  )
}

export default Header