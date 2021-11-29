import React, { FC } from 'react';

import styles from './footer.module.scss';

const Footer: FC = () => (
  <div className={styles.container_footer}>
    <a
      target="_blank"
      href="https://www.facebook.com/iNoelAndrew"
      rel="noreferrer"
    >
      <img className={styles.facebook} src="/assets/facebook.svg" alt="" />
    </a>
    <a
      target="_blank"
      href=""
      rel="noreferrer"
    >
      <img src="/assets/whatsapp.svg" alt="" />
    </a>
  </div>
);

export default Footer;
