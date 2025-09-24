import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Ascend Consulting transformed our organization's approach to leadership development. Their expertise and methodology delivered exceptional results.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Solutions"
    },
    {
      quote: "The strategic guidance provided by Ascend helped us navigate a complex transformation successfully. Highly recommended for any organization looking to evolve.",
      author: "Michael Chen",
      position: "COO",
      company: "Global Industries"
    },
    {
      quote: "Working with Ascend was a game-changer for our business. Their insights and tools enabled us to achieve sustainable growth and improved performance.",
      author: "Emily Rodriguez",
      position: "VP of Operations",
      company: "Innovation Labs"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Hear from leaders who have transformed their organizations with our guidance.
          </p>
        </div>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quote}>
                <span className={styles.quoteIcon}>&quot;</span>
                <p className={styles.quoteText}>{testimonial.quote}</p>
              </div>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.author}</h4>
                  <p className={styles.authorPosition}>
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
