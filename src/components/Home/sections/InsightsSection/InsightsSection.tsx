import Link from 'next/link';
import styles from './InsightsSection.module.css';

const InsightsSection = () => {
  const insights = [
    {
      title: "The Future of Leadership in Digital Transformation",
      excerpt: "Exploring how leadership roles are evolving in the digital age and what skills leaders need to develop.",
      date: "December 15, 2024",
      category: "Leadership"
    },
    {
      title: "Building Resilient Organizations",
      excerpt: "Key strategies for creating organizational resilience in an uncertain business environment.",
      date: "December 10, 2024",
      category: "Strategy"
    },
    {
      title: "Effective Change Management Practices",
      excerpt: "Best practices for managing organizational change and ensuring successful transformation initiatives.",
      date: "December 5, 2024",
      category: "Change Management"
    }
  ];

  return (
    <section className={styles.insightsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Latest Insights</h2>
          <p className={styles.subtitle}>
            Stay informed with our latest thinking on business transformation, leadership, and organizational excellence.
          </p>
        </div>
        
        <div className={styles.insightsGrid}>
          {insights.map((insight, index) => (
            <article key={index} className={styles.insightCard}>
              <div className={styles.category}>{insight.category}</div>
              <h3 className={styles.insightTitle}>{insight.title}</h3>
              <p className={styles.insightExcerpt}>{insight.excerpt}</p>
              <div className={styles.insightMeta}>
                <span className={styles.date}>{insight.date}</span>
                <Link href="/resource-center" className={styles.readMore}>
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <Link href="/resource-center" className={styles.viewAllBtn}>
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
