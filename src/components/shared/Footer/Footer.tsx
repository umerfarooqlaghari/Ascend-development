import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>QUICK LINKS</h3>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/about-us" className={styles.link}>About Us</Link></li>
              <li><Link href="/our-services" className={styles.link}>Our Services</Link></li>
              <li><Link href="/our-tools" className={styles.link}>Our Tools</Link></li>
              <li><Link href="/careers" className={styles.link}>Careers</Link></li>
              <li><Link href="/resource-center" className={styles.link}>Resource Center</Link></li>
              <li><Link href="/contact-us" className={styles.link}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>OUR SERVICES</h3>
            <ul className={styles.linkList}>
              <li><Link href="/our-services" className={styles.link}>Organizational & Business Consulting</Link></li>
              <li><Link href="/our-services" className={styles.link}>People & Organizational Performance</Link></li>
              <li><Link href="/our-services" className={styles.link}>Leadership & Capability Development</Link></li>
              <li><Link href="/our-services" className={styles.link}>Transformation, Change & Strategic Communications</Link></li>
              <li><Link href="/our-services" className={styles.link}>Executive Talent Search</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>FOLLOW US</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span className={styles.socialIcon}>f</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span className={styles.socialIcon}>📷</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <span className={styles.socialIcon}>in</span>
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div className={styles.section}>
            <div className={styles.logo}>
              <Image
                src="/Ascendlogo.jpg"
                alt="Ascend Consulting Logo"
                width={180}
                height={60}
              />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.phone}>0213-524-3360</p>
              <p className={styles.email}>INFO@ASCENDDEVELOPMENT.COM</p>
              <p className={styles.address}>
                14-C, Lane 7, Bukhari Commercial Area,<br />
                Phase 6 D.H.A, Karachi
              </p>
              <Link href="/contact-us" className={styles.contactButton}>
                CONTACT US
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2025 Ascend Consulting. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
