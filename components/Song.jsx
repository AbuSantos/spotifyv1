import { currentTrackIdState, isPlayingState } from '@/atoms/songAtom'
import useSpotify from '@/hooks/useSpotify'
import { millisToMinsAndSecs } from '@/lib/time'
import { useRecoilValue, useRecoilState } from 'recoil'

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] = useRecoilState(
    currentTrackIdState,
  )
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const playSong = () => {
    setCurrentTrackId(track.track.id)
    setIsPlaying(true)

    spotifyApi.play({
      uris: [track.track.uri],
    })
  }
  return (
    <div className="grid text-gray-500 gap-5 py-4 px-5 hover:bg-gray-900 w-full cursor-pointer">
      <div
        className="flex items-center space-x-4 justify-between"
        onClick={playSong}
      >
        <div className="flex items-center space-x-4">
          <p>{order + 1}</p>
          <img
            src={track.track.album.images[0].url}
            alt=""
            className="h-10 w-10"
          />
        </div>
        <div className="flex-1 ">
          <p className="text-gray-100 w-36 lg:w-64 truncate">
            {track.track.name}
          </p>
          <small className="text-gray-400 w-30">
            {track.track.artists[0].name}
          </small>
        </div>
        <div className="flex-1 items-center justify-between  w-40 ">
          <p className="hidden md:inline">{track.track.album.name}</p>
          <p>{millisToMinsAndSecs(track.track.duration_ms)}</p>
        </div>
      </div>
    </div>
  )
}

export default Song
