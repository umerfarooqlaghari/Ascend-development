import styles from './ClientsSection.module.css';

const ClientsSection = () => {
  const clients = [
    { name: "TechCorp Solutions", logo: "TC" },
    { name: "Global Industries", logo: "GI" },
    { name: "Innovation Labs", logo: "IL" },
    { name: "Future Dynamics", logo: "FD" },
    { name: "Strategic Partners", logo: "SP" },
    { name: "Excellence Group", logo: "EG" },
    { name: "Visionary Systems", logo: "VS" },
    { name: "Progressive Solutions", logo: "PS" }
  ];

  return (
    <section className={styles.clientsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Clients</h2>
          <p className={styles.subtitle}>
            Trusted by leading organizations across industries to drive transformation and achieve excellence.
          </p>
        </div>
        
        <div className={styles.clientsGrid}>
          {clients.map((client, index) => (
            <div key={index} className={styles.clientCard}>
              <div className={styles.clientLogo}>
                {client.logo}
              </div>
              <span className={styles.clientName}>{client.name}</span>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Ready to join our community of successful organizations?
          </p>
          <button className={styles.ctaButton}>
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
