'use client'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
const Center = () => {
  const { data: session } = useSession()
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex bg-red-300 items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 py-2">
          <img
            className="w-10 h-10 rounded-full"
            src={session?.user?.image}
            alt=""
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="w-5" />
        </div>
      </header>
      <section
        className={` flex items-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white p-8`}
      >
        jsj
      </section>
      Center
    </div>
  )
}

export default Center
