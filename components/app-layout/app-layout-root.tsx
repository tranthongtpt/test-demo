import AppFooter from '@/components/app-layout/app-footer'
import AppHeader from '@/components/app-layout/app-header'

type AppLayoutRootProps = React.PropsWithChildren

export default function AppLayoutRoot({ children }: AppLayoutRootProps) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  )
}
