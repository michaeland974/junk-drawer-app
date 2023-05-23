import { useRef, useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import styles from './styles/MusicPlayer.module.css';

type Props = {
  url: string
}

export const MusicPlayer: React.FC<Props> = ({url}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [localStorageAudio] = useLocalStorage('storedAudio', audioRef.current?.currentTime ?? 0);

  useEffect(() => {
    const localAudio: number = JSON.parse(localStorageAudio as string) ?? 0;
    if(audioRef.current){
      audioRef.current.currentTime = localAudio;
    }
  }, []);

  return (
    <audio id={styles['player']}
           onTimeUpdate={() => {
            localStorage.setItem('storedAudio', 
              JSON.stringify(audioRef.current?.currentTime ?? 0));
           }}
           ref={audioRef}
           controls           
           preload="metadata"
           loop>
      <source src={url} type="audio/mpeg"/>
    </audio>
  );
};