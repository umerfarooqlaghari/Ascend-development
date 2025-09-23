import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Left Side Branding */}
      <div className={styles.leftBranding}>
      <div className={styles.verticalText}>
          <span>ASCEND CONSULTING</span>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.verticalIcons}>
          <a href="#" className={styles.socialIcon}>
            <span>in</span>
          </a>
          <a href="#" className={styles.socialIcon}>
            <span>f</span>
          </a>
          <a href="#" className={styles.socialIcon}>
            <span>📷</span>
          </a>
        </div>

        
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            WE IMPACT LIVES,<br />
            TRANSFORM ORGANIZATIONS,<br />
            EVERY DAY, EVERYWHERE.
          </h1>
        </div>

        {/* Animated Pyramid */}
        <div className={styles.animationContainer}>
          <div className={styles.pyramid}>
            {/* Generate 14 stripes for the pyramid */}
            {Array.from({ length: 14 }, (_, i) => (
              <div key={i} className={`${styles.stripe} ${styles[`stripe${i + 1}`]}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
