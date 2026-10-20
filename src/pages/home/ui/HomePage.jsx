import { useState } from 'react'
import Header from '../../../widgets/header/ui/Header'
import Hero from '../../../widgets/hero/ui/Hero'
import Locations from '../../../widgets/locations/ui/Locations'
import Benefits from '../../../widgets/benefits/ui/Benefits'
import HowItWorks from '../../../widgets/how-it-works/ui/HowItWorks'
import Booking from '../../../widgets/booking/ui/Booking'
import Offer from '../../../widgets/offer/ui/Offer'
import WhereToFind from '../../../widgets/where-to-find/ui/WhereToFind'
import Testimonials from '../../../widgets/testimonials/ui/Testimonials'
import FAQ from '../../../widgets/faq/ui/FAQ'
import Footer from '../../../widgets/footer/ui/Footer'
import AuthModal from '../../../features/auth/ui/AuthModal'
import ScheduleVisitModal from '../../../features/schedule-visit/ui/ScheduleVisitModal'
import { scrollToId } from '../../../shared/lib/scrollToId'

function HomePage() {
  const [selectedDay, setSelectedDay] = useState(null)
  const [user, setUser] = useState(null)
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const closeScheduleModal = () => setSelectedDay(null)

  return (
    <>
      <Header
        user={user}
        onLogout={() => setUser(null)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />
      <main>
        <Hero
          onScrollToBooking={() => scrollToId('agendar')}
          onScrollToSchedule={() => scrollToId('agenda')}
        />
        <Locations />
        <Benefits />
        <HowItWorks />
        <Booking onSelectDay={setSelectedDay} />
        <Offer />
        <WhereToFind />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={setUser}
      />

      <ScheduleVisitModal
        isOpen={selectedDay !== null}
        selectedDay={selectedDay}
        user={user}
        onClose={closeScheduleModal}
      />
    </>
  )
}

export default HomePage
