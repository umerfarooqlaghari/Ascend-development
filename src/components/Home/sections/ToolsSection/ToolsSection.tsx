import Link from 'next/link';
import styles from './ToolsSection.module.css';

const ToolsSection = () => {
  const tools = [
    {
      title: "Assessment Tools",
      description: "Comprehensive evaluation frameworks to assess organizational capabilities and performance.",
      icon: "📋"
    },
    {
      title: "Analytics Platform",
      description: "Data-driven insights and analytics to support strategic decision-making.",
      icon: "📊"
    },
    {
      title: "Training Modules",
      description: "Interactive learning modules for leadership and skill development programs.",
      icon: "🎓"
    },
    {
      title: "Change Management Toolkit",
      description: "Proven methodologies and tools to manage organizational transformation.",
      icon: "🔄"
    }
  ];

  return (
    <section className={styles.toolsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Tools</h2>
          <p className={styles.subtitle}>
            Powerful tools and methodologies to accelerate your organization's growth and transformation.
          </p>
        </div>
        
        <div className={styles.toolsGrid}>
          {tools.map((tool, index) => (
            <div key={index} className={styles.toolCard}>
              <div className={styles.toolIcon}>{tool.icon}</div>
              <h3 className={styles.toolTitle}>{tool.title}</h3>
              <p className={styles.toolDescription}>{tool.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <Link href="/our-tools" className={styles.exploreBtn}>
            Explore All Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
