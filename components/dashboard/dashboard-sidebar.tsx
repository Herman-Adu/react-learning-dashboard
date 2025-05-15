import {
  //Calendar,
  Home,
  //Inbox,
  //ArrowLeft,
  Flag,
  History,
  Search,
  Settings,
  ChevronDown,
  //User2,
  ChevronUp,
  ShieldCheck,
  //Cog,
  LogOut
  //LogIn,
  //Users2
  //UserRoundCog
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator
} from '@/components/ui/sidebar'
import Link from 'next/link'
import SidebarMenuActiveButton from '../sidebar-menu-active-button'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

// Menu items.
const dashboardItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home
  }
]

// Menu items.
const reactFundamentalsMenuItems = [
  {
    title: 'Introduction',
    url: '/dashboard/react-fundamentals/introduction',
    icon: Home
  },
  {
    title: 'Components',
    url: '/dashboard/react-fundamentals/react-components',
    icon: Search
  },
  {
    title: 'JSX',
    url: '/dashboard/react-fundamentals/jsx',
    icon: History
  },
  {
    title: 'Props',
    url: '/dashboard/react-fundamentals/props',
    icon: Flag
  },
  {
    title: 'State',
    url: '/dashboard/react-fundamentals/state',
    icon: Settings
  },
  {
    title: 'Virtual Dom',
    url: '/dashboard/react-fundamentals/virtual-dom',
    icon: Settings
  }
]

// Menu items.
const reactHookMeunItems = [
  {
    title: 'useState',
    url: '/dashboard/react-hooks/use-state',
    icon: Settings
  },
  {
    title: 'useEffect',
    url: '/dashboard/react-hooks/use-effect',
    icon: Settings
  },
  {
    title: 'useContext',
    url: '/dashboard/react-hooks/use-context',
    icon: Settings
  },
  {
    title: 'useReducer',
    url: '/dashboard/react-hooks/use-reducer',
    icon: Settings
  },
  {
    title: 'useRef',
    url: '/dashboard/react-hooks/use-ref',
    icon: Settings
  },
  {
    title: 'useMemo',
    url: '/dashboard/react-hooks/use-memo',
    icon: Settings
  },
  {
    title: 'useTransition',
    url: '/dashboard/react-hooks/use-transition',
    icon: Settings
  },
  {
    title: 'useId',
    url: '/dashboard/react-hooks/use-id',
    icon: Settings
  }
]

// Menu items.
const advanceConceptsMeunItems = [
  {
    title: 'Custom Hooks',
    url: '/dashboard/advance-concepts/custom-hooks',
    icon: Settings
  },
  {
    title: 'Design Patterns',
    url: '/dashboard/advance-concepts/design-patterns',
    icon: Settings
  }
]

// Menu items.
const footerMenuItems = [
  {
    title: 'Profile',
    url: '/users/herman-adu',
    icon: ShieldCheck
  },
  {
    title: 'Settings',
    url: '/users/herman-adu',
    icon: ShieldCheck
  },
  {
    title: 'Sign out',
    url: '/',
    icon: LogOut
  },
  {
    title: 'Sign in',
    url: '/authentication',
    icon: LogOut
  }
]

export function DashboardSidebar() {
  return (
    <Sidebar collapsible='icon' variant='inset'>
      <SidebarHeader className='py-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href='/'>
                <Image
                  className='hidden dark:block'
                  src='/adudev-light-Logo.png'
                  alt='dark-mode-image'
                  width={20}
                  height={20}
                />
                <Image
                  className='block dark:hidden'
                  src='/adudev-Logo.png'
                  alt='light-mode-image'
                  width={20}
                  height={20}
                />
                <span className='mb-[3px]'>Adu Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator className='mr-4' />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>React</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map(dashboardItem => (
                <SidebarMenuItem key={dashboardItem?.title}>
                  <SidebarMenuActiveButton
                    href={(dashboardItem?.url && dashboardItem.url) ?? '#'}
                    icon={dashboardItem?.icon && <dashboardItem.icon />}
                    title={(dashboardItem?.title && dashboardItem.title) ?? ''}
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>React Fundamentals</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {reactFundamentalsMenuItems.map(item => (
                <SidebarMenuItem key={item?.title}>
                  <SidebarMenuActiveButton
                    href={(item?.url && item.url) ?? '#'}
                    icon={item?.icon && <item.icon />}
                    title={(item?.title && item.title) ?? ''}
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible defaultOpen className='group/collapsible'>
            <SidebarGroup>
              <SidebarGroupLabel asChild className='mb-0'>
                <CollapsibleTrigger>
                  React Hooks
                  <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {reactHookMeunItems.map(item => (
                      <SidebarMenuItem key={item?.title}>
                        <SidebarMenuActiveButton
                          href={(item?.url && item.url) ?? '#'}
                          icon={item?.icon && <item.icon />}
                          title={(item?.title && item.title) ?? ''}
                        />
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible defaultOpen className='group/collapsible'>
            <SidebarGroup>
              <SidebarGroupLabel asChild className='mb-0'>
                <CollapsibleTrigger>
                  Advance Concepts
                  <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {advanceConceptsMeunItems.map(item => (
                      <SidebarMenuItem key={item?.title}>
                        <SidebarMenuActiveButton
                          href={(item?.url && item.url) ?? '#'}
                          icon={item?.icon && <item.icon />}
                          title={(item?.title && item.title) ?? ''}
                        />
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className='h-12'>
                  <Avatar>
                    <AvatarImage src='/herman-profile-v3.jpg' />
                    <AvatarFallback>HA</AvatarFallback>
                  </Avatar>
                  <ChevronUp className='ml-auto mr-2' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                {footerMenuItems.map(item => (
                  <DropdownMenuItem key={item?.title}>
                    <SidebarMenuActiveButton
                      href={(item?.url && item.url) ?? '#'}
                      icon={item?.icon && <item.icon />}
                      title={(item?.title && item.title) ?? ''}
                    />
                  </DropdownMenuItem>
                ))}

                {/*  <DropdownMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      href='/user-settings'
                      onClick={() => setOpenMobile(false)}
                    >
                      <Cog />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href='/' onClick={() => setOpenMobile(false)}>
                      <LogOut />
                      <span>Sign out</span>
                    </Link>
                  </SidebarMenuButton>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      href='/authentication'
                      onClick={() => setOpenMobile(false)}
                    >
                      <LogIn />
                      <span>Sign in</span>
                    </Link>
                  </SidebarMenuButton>
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
