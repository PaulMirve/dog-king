import styles from '@sass/components/card.module.scss';
import { ColorType } from 'types/Colors';
import { NumberType } from 'types/Number';

type Props = {
    number: NumberType
    color: ColorType,
    clickable?: boolean,
    variant?: 'small' | "default"
};

const Card = ({ number, color, clickable, variant }: Props) => {

    return (
        <div className={`${styles.main} ${styles[color]} ${clickable && styles.clickable} ${variant === 'small' && styles.small}`}>
            {
                color === 'white' ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    :
                    <h1 className={styles.number}>{number}</h1>
            }

        </div>
    );
};

export default Card;
