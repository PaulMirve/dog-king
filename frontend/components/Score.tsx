import styles from '@sass/components/score.module.scss';

type Props = {};

const Score = (props: Props) => {
    return (
        <div className={styles.main}>
            <div className={styles.player}>
                <div className={styles.color} style={{ backgroundColor: 'red' }}></div>
                <h5 className={styles.name}>Player 1</h5>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow} viewBox="0 0 512 512">
                    <title>Caret Forward</title><path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                </svg>
                <h5 className={styles.score}>40</h5>
            </div>
        </div>
    );
};

export default Score;
