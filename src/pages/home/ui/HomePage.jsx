import { useState } from 'react'
import {
  Header,
  Hero,
  Locations,
  Benefits,
  HowItWorks,
  Booking,
  Offer,
  WhereToFind,
  Testimonials,
  FAQ,
  Footer
} from '../../../widgets'
import { AuthModal, ScheduleVisitModal } from '../../../features'
import { scrollToId } from '../../../shared'

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
