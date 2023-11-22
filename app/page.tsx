import AppLayoutRoot from '@/components/app-layout/app-layout-root'
import HeroHome from '@/components/page-home/Hero'
import ReasonPage from '@/components/page-home/ReasonPage'
import OurTeamPage from '@/components/page-home/OurTeamPage'
import BannerPage from '@/components/page-home/BannerPage'
import ExperiencePage from '@/components/page-home/ExperiencePage'
import AchievementPage from '@/components/page-home/AchievementPage'
import PricePage from '@/components/page-home/PricePage'
import ArchivesPage from '@/components/page-home/ArchivesPage'
import FormAdvise from '@/components/FormAdvise'

export default async function Page() {

  return (
    <AppLayoutRoot>
      <main>
        <HeroHome />
        <ReasonPage />
        <OurTeamPage />
        <BannerPage />
        <ExperiencePage />
        <AchievementPage />
        <PricePage />
        <ArchivesPage />
        <section className="container mx-auto  py-8 max-sm:px-2 sm:py-16">
          <FormAdvise />
        </section>
      </main>
    </AppLayoutRoot>
  )
}
