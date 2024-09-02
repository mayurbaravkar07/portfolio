import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import { TopTracks } from '../lib/types';
import Track from '@/components/Track';
import { FaGhost } from 'react-icons/fa';

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher);

  if (!data) {
    return (
      <>
        <div className="py-5">
          <FaGhost className='w-8 h-8 md:w-11 md:h-11 mb-5 animate-bounce'/>
          <span>No tracks available :(</span>
        </div>
      </>
    )
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
