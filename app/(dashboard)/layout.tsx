import AppLayoutRoot from '@/components/app-layout/app-layout-root'
import ClientLayout from '@/components/dashboard/Layout/ClientLayout'

type AppLayoutProps = React.PropsWithChildren
export default async function LayoutDashboard({ children }: AppLayoutProps) {
  return <ClientLayout>{children}</ClientLayout>
}
