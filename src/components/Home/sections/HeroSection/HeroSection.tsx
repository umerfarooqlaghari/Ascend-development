import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Elevate Your Business to New Heights
          </h1>
          <p className={styles.subtitle}>
            Professional consulting services to help your organization ascend to excellence through strategic transformation and innovative solutions.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Get Started</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          {/* Hero image placeholder */}
          <div className={styles.imagePlaceholder}>
            <span>Hero Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
