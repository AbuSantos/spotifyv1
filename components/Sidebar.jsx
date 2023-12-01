import Link from 'next/link'
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline'
const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-3 p-4 text-gray-500 border-r border-gray-900 text-sm ">
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
      <hr />
    </div>
  )
}

export default Sidebar
