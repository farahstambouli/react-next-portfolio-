// pages/contact.js

import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactText}>
        <h1>Contact Me</h1>
        <p>Email: <a href="mailto:farahstambouli1@gmail.com">farahstambouli1@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/farahstambouli" target="_blank" rel="noopener noreferrer">farah stambouli</a></p>
        <p>For more information, please feel free to contact me.</p>
      </div>
    </div>
  );
}

  