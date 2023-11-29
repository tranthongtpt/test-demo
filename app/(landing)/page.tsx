'use client'
import FormAdvise from '@/components/landing/FormAdvise'
import AchievementPage from '@/components/page-home/AchievementPage'
import ArchivesPage from '@/components/page-home/ArchivesPage'
import BannerPage from '@/components/page-home/BannerPage'
import ExperiencePage from '@/components/page-home/ExperiencePage'
import HeroHome from '@/components/page-home/Hero'
import OurTeamPage from '@/components/page-home/OurTeamPage'
import PricePage from '@/components/page-home/PricePage'
import ReasonPage from '@/components/page-home/ReasonPage'

function LandingPage() {
  return (
    <>
      <HeroHome />
      <ReasonPage />
      <OurTeamPage />
      <BannerPage />
      <ExperiencePage />
      <AchievementPage />
      <PricePage />
      <ArchivesPage />
      <section className="container mx-auto py-8 max-sm:px-2 sm:py-16">
        <FormAdvise />
      </section>
    </>
  )
}

export default LandingPage
