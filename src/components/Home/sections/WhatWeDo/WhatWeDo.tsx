import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  return (
    <section className={styles.whatWeDo}>
      <div className={styles.container}>
        {/* Centered header */}
        <div className={styles.header}>
          <h2 className={styles.title}>WHAT <span className={styles.underlined}>WE DO</span></h2>
        </div>

        <div className={styles.content}>
          {/* Left side - Text content */}
          <div className={styles.textContent}>
            <div className={styles.textBlock}>
              <p>We are a consulting firm committed to enabling organizations to thrive by aligning their people, processes, and purpose. We bring together deep insight, proven tools, and a people-first approach to deliver real, measurable impact across industries and geographies.</p>
            </div>

            <div className={styles.textBlock}>
              <p>We believe in empowering organizations with a purpose that drives, people who lead, and processes that enable them to champion transformation for a sustainable future. We step into your shoes, understand your purpose and passion, own your challenges, and partner with you to co-create a winning strategy.</p>
            </div>

            <div className={styles.textBlock}>
              <p>Explore our services, meet our team, and dive into stories of real impact across industries.</p>
            </div>

            <button className={styles.brochureButton}>Ascend Brochure</button>
          </div>

          {/* Right side - 3x2 Image grid */}
          <div className={styles.imageGrid}>
            <div className={styles.imageItem}>
              <img src="/images/whatwedo/image1.png" alt="Service 1" />
            </div>
            <div className={styles.imageItem}>
              <img src="/images/whatwedo/image2.png" alt="Service 2" />
            </div>
            <div className={styles.imageItem}>
              <img src="/images/whatwedo/image3.png" alt="Service 3" />
            </div>
            <div className={styles.imageItem}>
              <img src="/images/whatwedo/image4.png" alt="Service 4" />
            </div>
            <div className={styles.imageItem}>
              <img src="/images/whatwedo/image5.png" alt="Service 5" />
            </div>
            <div className={styles.imageItem}>
              <img src="/images/whatwedo/image6.png" alt="Service 6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
