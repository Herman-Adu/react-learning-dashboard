import { cookies } from 'next/headers'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import Navbar from '@/components/navbar'

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()

  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardSidebar />

      <SidebarInset>
        <main className='min-h-screen w-full items-start justify-start gap-8'>
          <Navbar />

          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
