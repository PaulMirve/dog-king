import styles from '@sass/pages/room.module.scss';
import { useState } from 'react';
import { io } from 'socket.io-client';

type Props = {};
const socket = io('http://localhost:8080', { transports: ['websocket'] });
const room = (props: Props) => {
    const [username, setUsername] = useState('');
    const [players, setPlayers] = useState<string[]>([]);

    const onUsernameSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        socket.emit('userJoin', username);
    }

    socket.on("userJoin", (user: string) => {
        setPlayers(prev => [...prev, user]);
    });

    return (
        <main className={styles.main}>
            <form onSubmit={onUsernameSubmit}>
                <input type="text" onChange={e => setUsername(e.target.value)} value={username} />
                <button type='submit'>Submit</button>
            </form>
            {
                players.map((user, index) => <h1 key={index}>{user}</h1>)
            }
        </main>
    );
};

export default room;
