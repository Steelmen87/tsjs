import React from 'react';
import styles from './Rating.module.css'

type OnOffProps = {
    state: boolean
}
const OnOff: React.FC<OnOffProps> = ({state}) => {
    let res = state ? styles.green : styles.red
    return (
        <div className={styles.blockFlex}>
            <div className={`${styles.item} ${state && styles.green}`}>on</div>
            <div className={`${styles.item} ${!state && styles.red}`}>off</div>
            <div className={`${styles.lamp} ${res}`}></div>
        </div>
    );
};

export default OnOff;