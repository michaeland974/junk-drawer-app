import { useRef, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import styles from './styles/MusicPlayer.module.css';
import { WrapperWithShadow } from '../WrapperWithShadow';

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
    <WrapperWithShadow className={styles['component-wrapper']}>
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
    </WrapperWithShadow>
  );
};