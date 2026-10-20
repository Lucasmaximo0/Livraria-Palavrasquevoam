import { faqs } from '../../../entities/faq/model/faqs'
import AccordionItem from '../../../features/faq-accordion/ui/AccordionItem'
import SectionTitle from '../../../shared/ui/section-title/SectionTitle'
import styles from './FAQ.module.css'

function FAQ() {
  return (
    <section id="faq" className={`container sectionSpacing ${styles.section}`}>
      <SectionTitle kicker="FAQ" title="Perguntas frequentes" />

      <div className={styles.list}>
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

export default FAQ
