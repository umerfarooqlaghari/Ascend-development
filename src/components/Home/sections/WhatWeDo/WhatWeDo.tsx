import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  return (
    <section className={styles.whatWeDo}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What We Do</h2>
          <p className={styles.subtitle}>
            We provide comprehensive consulting services to help organizations transform, grow, and achieve sustainable success.
          </p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <span>🎯</span>
            </div>
            <h3>Strategic Planning</h3>
            <p>Develop comprehensive strategies that align with your business objectives and drive long-term growth.</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>
              <span>🚀</span>
            </div>
            <h3>Business Transformation</h3>
            <p>Guide your organization through digital and operational transformation initiatives.</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>
              <span>👥</span>
            </div>
            <h3>Leadership Development</h3>
            <p>Build strong leadership capabilities and enhance organizational performance.</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>
              <span>📊</span>
            </div>
            <h3>Performance Optimization</h3>
            <p>Improve operational efficiency and maximize your organization's potential.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
