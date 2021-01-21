import React from 'react';

import styles from './Header.module.scss';

const Header = () => (
  <header className='container'>
    <a href='/' className={styles.homepageLink}>Pokedex</a>
  </header>
);

export default Header;