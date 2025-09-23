import Link from 'next/link';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  const services = [
    {
      title: "Organizational & Business Consulting",
      description: "Strategic guidance to optimize your organizational structure and business processes.",
      link: "/our-services"
    },
    {
      title: "People & Organizational Performance",
      description: "Enhance human capital and organizational effectiveness through proven methodologies.",
      link: "/our-services"
    },
    {
      title: "Leadership & Capability Development",
      description: "Build strong leadership capabilities and develop organizational competencies.",
      link: "/our-services"
    },
    {
      title: "Transformation, Change & Strategic Communications",
      description: "Navigate complex transformations with effective change management and communication strategies.",
      link: "/our-services"
    },
    {
      title: "Executive Talent Search",
      description: "Find and recruit top-tier executive talent to drive your organization forward.",
      link: "/our-services"
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive consulting solutions tailored to your organization's unique needs and challenges.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <Link href={service.link} className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <Link href="/our-services" className={styles.viewAllBtn}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
