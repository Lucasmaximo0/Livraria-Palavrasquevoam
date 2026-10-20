import { useCarousel } from '../model/useCarousel'
import styles from './LocationCarousel.module.css'

function LocationCarousel({ items }) {
  const { current, next, prev, goTo, setPaused } = useCarousel(items.length, 5000)

  return (
    <div
      className={`${styles.carousel} glass`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button type="button" className={styles.arrow} onClick={prev} aria-label="Slide anterior">
        ‹
      </button>

      <div className={styles.trackWrap}>
        <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
          {items.map((item) => (
            <article className={styles.slide} key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className={styles.content}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <strong>{item.audience}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button type="button" className={styles.arrow} onClick={next} aria-label="Próximo slide">
        ›
      </button>

      <div className={styles.dots}>
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            className={index === current ? styles.dotActive : styles.dot}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default LocationCarousel
