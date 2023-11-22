import AppLayoutRoot from '@/components/app-layout/app-layout-root'

type AppLayoutProps = React.PropsWithChildren

export default function AppLayout({ children }: AppLayoutProps) {
  return <>{children}</>
}
