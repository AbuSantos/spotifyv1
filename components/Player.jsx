'use client'
import useSpotify from '@/hooks/useSpotify'
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '@/atoms/songAtom'
import { useEffect, useState } from 'react'
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

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log('is playing:', data.body?.item)
        setCurrentTrackId(data.body?.item?.id)
        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing)
        })
      })
    }
  }

  useEffect(() => {
    //checking if we have the right auth and a current track is playing
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong()
      setVolume(50)
    }
  }, [currentTrackIdState, spotifyApi, session])

  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 grid grid-cols-3 text-xs md:text-base px-2 md:px-8 ">
      <div className='flex items-center space-x-4'>
        <img
          src={songInfo?.album?.images?.[0]?.url}
          alt="playing"
          className="hidden md:inline h-20 w-20"
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Player
