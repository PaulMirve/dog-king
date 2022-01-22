import styles from '@sass/components/info.module.scss';

type Props = {};

const Info = (props: Props) => {
    return (
        <div className={styles.main}>
            <h1 className={styles.turn}>Turn 1</h1>
            <h1 className={styles.name}>IguanaDJ</h1>
            <div className={styles.score}>0 - 3</div>
        </div>
    );
};

export default Info;
