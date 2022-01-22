import type { NextPage } from 'next'
import styles from '@sass/pages/landing.module.scss';
import Heading from '../components/Heading';
import { GameContext } from 'context/GameContext';
import { useEffect, useState } from 'react';
import Card from 'components/Card';
import PlayerLabel from 'components/PlayerLabel';
import Info from 'components/Info';
import Score from 'components/Score';
import BetModal from 'components/BetModal';
import { io } from 'socket.io-client';

const Home: NextPage = () => {
  const [turn, setTurn] = useState(1);

  useEffect(() => {
    const socket = io('http://localhost:8080', { transports: ['websocket'] });
    console.log(socket);
  })
  return (
    <GameContext.Provider value={{ turn }}>
      <div className={styles.main}>
        <div className={styles.players}>
          <PlayerLabel name='Player 1' bet={3} wins={0} color='#06D6A0' />
          <PlayerLabel hasTurn name='Player 2' bet={3} wins={0} color='#3A86FF' />
          <PlayerLabel name='Player 3' bet={3} wins={0} color='#EF476F' />
        </div>
        <div className={styles.table}>
        </div>
        <div className={styles.me}>
          <div className={styles.hand}>
            <Card clickable number={1} color='yellow' />
            <Card clickable number={5} color='blue' />
            <Card clickable number={12} color='red' />
            <Card clickable number={9} color='black' />
            <Card clickable number={9} color='white' />
          </div>
          <div className={styles.info}>
            <Info />
            <Score />
          </div>
        </div>
      </div>
      {/* <BetModal /> */}
    </GameContext.Provider>

  )
}

export default Home
