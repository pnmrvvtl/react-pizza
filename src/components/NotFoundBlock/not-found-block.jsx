import React from 'react';
import styles from './not-found-block.module.scss';

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
                :(
            <br/>
                К сожалению данная страница отсутствует.
        </div>
    );
};

export default NotFoundBlock;