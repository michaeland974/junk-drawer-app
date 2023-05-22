import { useRef } from 'react';

type Props = {
  url: string
  duration?: number
}

export const MusicPlayer: React.FC<Props> = ({url}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <audio ref={audioRef}
           controls
           loop>
      <source src={url} type="audio/mpeg"/>
    </audio>
  );
};