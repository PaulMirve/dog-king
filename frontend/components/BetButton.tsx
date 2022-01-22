import styles from '@sass/components/bet-button.module.scss';

type Props = {
    number: number
};

const BetButton = ({ number }: Props) => {
    return (
        <div className={styles.main}>
            {number}
        </div>
    )
};

export default BetButton;
