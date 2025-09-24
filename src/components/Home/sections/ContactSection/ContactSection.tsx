import Link from 'next/link';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Ready to Transform Your Organization?</h2>
            <p className={styles.subtitle}>
              Let&apos;s discuss how we can help your organization ascend to new heights of success. 
              Our team of experts is ready to partner with you on your transformation journey.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>0213-524-3360</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>info@ascenddevelopment.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h4>Address</h4>
                  <p>14-C, Lane 7, Bukhari Commercial Area,<br />Phase 6 D.H.A, Karachi</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.ctaContent}>
            <div className={styles.ctaCard}>
              <h3>Get Started Today</h3>
              <p>Schedule a consultation to explore how we can help your organization achieve its goals.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact-us" className={styles.primaryBtn}>
                  Contact Us
                </Link>
                <button className={styles.secondaryBtn}>
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
