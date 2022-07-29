import React from 'react';
import styles from './Rating.module.css'

type OnOffProps = {
    setState:(on:boolean)=>void
    state:boolean
}
const OnOff: React.FC<OnOffProps> = ({setState,state}) => {

    let res = state ? styles.green : styles.red
    return (
        <div className={styles.blockFlex}>
            <div
            onClick={()=>setState(true)}
                className={`${styles.item} ${state && styles.green}`}>on</div>
            <div
                onClick={()=>setState(false)}
                className={`${styles.item} ${!state && styles.red}`}>off</div>
            <div className={`${styles.lamp} ${res}`}></div>
        </div>
    );
};

export default OnOff;