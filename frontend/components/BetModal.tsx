import styles from '@sass/components/bet-modal.module.scss';
import { ReactElement } from 'react';
import BetButton from './BetButton';
import Card from './Card';
import Heading from './Heading';

type Props = {};

const BetModal = (props: Props) => {

    const renderButtons = () => {
        const buttons: ReactElement[] = [];
        for (let i = 0; i < 10; i++) {
            buttons.push(<BetButton number={i + 1} />);
        }
        buttons.push(<BetButton number={0} />)
        return buttons;
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <Heading font='body' weight='bold' centered className={styles.title}>Choose a bet</Heading>
                <div className={styles.buttons}>
                    {renderButtons()}
                </div>
                <div className={styles.hand}>
                    <Card variant='small' number={2} color='red' />
                    <Card variant='small' number={2} color='red' />
                    <Card variant='small' number={2} color='red' />
                    <Card variant='small' number={2} color='red' />
                </div>
            </div>
        </div>
    );
};

export default BetModal;
