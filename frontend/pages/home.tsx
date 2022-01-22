import Heading from 'components/Heading';
import Head from 'next/head'
import styles from '@sass/pages/home.module.scss';
import { useRouter } from 'next/router';

type Props = {};

const home = (props: Props) => {
    const router = useRouter();

    return (
        <main className={styles.main}>
            <Head>
                <title>Dog King</title>
            </Head>
            <Heading className={styles.title} centered font='body' weight='bold' variant='h1'>Dog King</Heading>
            <button onClick={() => router.push('/room/123')}>Create room</button>
        </main>
    );
};

export default home;
