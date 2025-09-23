import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&copy; 2024 Ascend Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
