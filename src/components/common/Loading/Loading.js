import React from 'react';

import styles from './Loading.module.scss';

const Loading = () => (
  <div className={styles.loading}>
    <p className={styles.loadingMsg}>Loading...</p>
  </div>
);

export default Loading;