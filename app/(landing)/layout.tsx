import AppLayoutRoot from '@/components/app-layout/app-layout-root'

type AppLayoutProps = React.PropsWithChildren
export default async function LayoutHome({ children }: AppLayoutProps) {
  return (
    <AppLayoutRoot>
      <main>{children}</main>
    </AppLayoutRoot>
  )
}
