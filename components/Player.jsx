'use client'
import useSpotify from '@/hooks/useSpotify'
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '@/atoms/songAtom'
import { useState } from 'react'
import useSongInfo from '@/hooks/useSongInfo'

const Player = () => {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [currentTrackId, setCurrentTrackId] = useRecoilState(
    currentTrackIdState,
  )
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const [volume, setVolume] = useState(50)

  const songInfo = useSongInfo()
  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 ">
      <div>
        <img
          src={songInfo?.album?.images?.[0]?.url}
          alt="playing"
          className="hidden md:inline h-10 w-10"
        />
        <p>jssj</p>
      </div>
    </div>
  )
}

export default Player
