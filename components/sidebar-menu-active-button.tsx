'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar'

const SidebarMenuActiveButton = ({
  href,
  icon,
  title
}: {
  href: string
  icon: React.ReactNode
  title: string
}) => {
  // get the pathname
  const pathname = usePathname()

  // isActive if pathname is equal to the href
  const isActive = pathname === href

  const { setOpenMobile } = useSidebar()

  return (
    <SidebarMenuButton asChild isActive={isActive}>
      <Link href={href} onClick={() => setOpenMobile(false)}>
        {icon}
        <span>{title}</span>
      </Link>
    </SidebarMenuButton>
  )
}

export default SidebarMenuActiveButton
