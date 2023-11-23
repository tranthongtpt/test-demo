import AppLayoutRoot from '@/components/app-layout/app-layout-root'

type AppLayoutProps = React.PropsWithChildren
export default async function LayoutDashboard({ children }: AppLayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
