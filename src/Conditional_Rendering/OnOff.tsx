import React, {useState} from 'react';
import styles from './Rating.module.css'

type OnOffProps = {

}
const OnOff: React.FC<OnOffProps> = () => {
    let[state,setState]=useState(false)
    let res = state ? styles.green : styles.red
    return (
        <div className={styles.blockFlex}>
            <div
            onClick={()=>setState(!state)}
                className={`${styles.item} ${state && styles.green}`}>on</div>
            <div
                onClick={()=>setState(!state)}
                className={`${styles.item} ${!state && styles.red}`}>off</div>
            <div className={`${styles.lamp} ${res}`}></div>
        </div>
    );
};

export default OnOff;