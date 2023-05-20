import { useRef } from 'react';

type Props = {
  url: string
  duration?: number
}

export const MusicPlayer: React.FC<Props> = ({url}) => {
  const audioRef = useRef(null);

  return (
    <audio ref={audioRef}
           controls
           loop
           autoPlay>
      <source src={url} type="audio/mpeg"/>
    </audio>
  );
};