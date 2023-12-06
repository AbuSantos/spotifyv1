import { useRecoilValue } from 'recoil'
import { playlistIdState, playlistAtomState } from '../atoms/playlistAtom'
import Song from './Song'

const Songs = () => {
  const playlist = useRecoilValue(playlistAtomState)
  console.log(playlist)
  return (
    <div className="text-white flex flex-col  pb-28 space-y-1  ">
      {playlist?.tracks?.items.map((track, i) => (
        <>
          {/* <div>{track.track.name}</div> */}
          <Song key={track.track.id} track={track} order={i} />
        </>
      ))}
    </div>
  )
}

export default Songs
