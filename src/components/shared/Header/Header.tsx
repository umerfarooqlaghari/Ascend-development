import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/Ascendlogo.jpg"
              alt="Ascend Consulting Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about-us" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/our-services" className={styles.navLink}>
                Our Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/our-tools" className={styles.navLink}>
                Our Tools
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/careers" className={styles.navLink}>
                Careers
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/resource-center" className={styles.navLink}>
                Resource Center
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact-us" className={styles.navLink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
