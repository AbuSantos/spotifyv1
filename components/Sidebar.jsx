'use client'
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  HeartIcon,
  LogoutIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

const Sidebar = () => {
  const { data: session, status } = useSession()
  console.log(session)
  return (
    <div className=" p-4 text-gray-500 border-r border-gray-900 text-sm scrollbar-hide  overflow-y-scroll h-screen ">
      <div className=" space-y-4">
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2  hover:text-white"
        >
          <LogoutIcon className="h-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2  hover:text-white">
          <HomeIcon className="h-5" />
          <p>Home</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white ">
          <SearchIcon className="h-5" />
          <p> Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5" />
          <p> Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2  hover:text-white">
          <PlusCircleIcon className="h-5" />
          <p>Create Playlist</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white ">
          <HeartIcon className="h-5" />
          <p> Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5" />
          <p> Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
      </div>
    </div>
  )
}

export default Sidebar
