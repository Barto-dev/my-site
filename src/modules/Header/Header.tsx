import { Link } from 'preact-router/match';
import { useRef, useState } from 'preact/compat';

import audio from '@app/assets/8bit.mp3';
import muteImg from '@app/assets/mute.png';
import soundImg from '@app/assets/sound.png';

import styles from './Header.module.css';

const Header = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isAudioPlay, setIsAudioPlay] = useState(false);

  const onAudioPlay = async () => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setIsAudioPlay(true);
      });
    } else {
      setIsAudioPlay(false);
      audioRef.current.pause();
    }
  };
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav className={styles.nav} aria-label="Site navigation">
          <Link activeClassName="active" className={styles.link} href="/">Home</Link>
          <Link activeClassName="active" className={styles.link} href="/works">My works</Link>
          <Link activeClassName="active" className={styles.link} href="/technology">Technical stack</Link>
          <Link activeClassName="active" className={styles.link} href="/about">Contacts</Link>
          <Link activeClassName="active" className={styles.link} href="/achievements">Achievements</Link>
        </nav>
      </div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} className={styles.audio} controls src={audio} />
      <button className={styles.playAudio} onClick={onAudioPlay}>
        <img src={isAudioPlay ? soundImg : muteImg} alt="" aria-hidden="true" />
      </button>
    </header>
  );
};

export default Header;
