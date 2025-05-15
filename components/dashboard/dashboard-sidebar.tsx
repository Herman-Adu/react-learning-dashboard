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
  LogOut,
  LogIn,
  DoorOpenIcon
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
import { Icons } from '@/components/icons'
import { SVGProps } from 'react'

// Menu items.
const dashboardItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Icons.ReactIcon
  }
]

// Menu items.
const reactFundamentalsMenuItems = [
  {
    title: 'Introduction',
    url: '/dashboard/react-fundamentals/introduction',
    icon: Icons.HopOff
  },
  {
    title: 'Components',
    url: '/dashboard/react-fundamentals/react-components',
    icon: Icons.Component
  },
  {
    title: 'JSX',
    url: '/dashboard/react-fundamentals/jsx',
    icon: Icons.Jsx
  },
  {
    title: 'Props',
    url: '/dashboard/react-fundamentals/props',
    icon: Icons.Props
  },
  {
    title: 'State',
    url: '/dashboard/react-fundamentals/state',
    icon: Icons.State
  },
  {
    title: 'Virtual Dom',
    url: '/dashboard/react-fundamentals/virtual-dom',
    icon: Icons.VirtualDom
  }
]

// Menu items.
const reactHookMeunItems = [
  {
    title: 'useState',
    url: '/dashboard/react-hooks/use-state',
    icon: Icons.UseState
  },
  {
    title: 'useEffect',
    url: '/dashboard/react-hooks/use-effect',
    icon: Icons.UseEffect
  },
  {
    title: 'useContext',
    url: '/dashboard/react-hooks/use-context',
    icon: Icons.UseContext
  },
  {
    title: 'useReducer',
    url: '/dashboard/react-hooks/use-reducer',
    icon: Icons.UseReducer
  },
  {
    title: 'useRef',
    url: '/dashboard/react-hooks/use-ref',
    icon: Icons.UseRef
  },
  {
    title: 'useMemo',
    url: '/dashboard/react-hooks/use-memo',
    icon: Icons.UseMemo
  },
  {
    title: 'useTransition',
    url: '/dashboard/react-hooks/use-transition',
    icon: Icons.UseTransistion
  },
  {
    title: 'useId',
    url: '/dashboard/react-hooks/use-id',
    icon: Icons.UseId
  }
]

// Menu items.
const advanceConceptsMeunItems = [
  {
    title: 'Custom Hooks',
    url: '/dashboard/advance-concepts/custom-hooks',
    icon: Icons.CustomHook
  },
  {
    title: 'Design Patterns',
    url: '/dashboard/advance-concepts/design-patterns',
    icon: Settings
  },
  {
    title: 'Optimisation',
    url: '/dashboard/advance-concepts/optimisation',
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
    url: '/sign-in',
    icon: LogIn,
    color: '#3e9392'
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
          <Collapsible defaultOpen={false} className='group/collapsible'>
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
          <Collapsible defaultOpen={false} className='group/collapsible'>
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
          <SidebarMenuItem className=''>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className='h-12'>
                  <div className='flex w-full flex-row items-center justify-between'>
                    <div className='flex flex-row items-center gap-2'>
                      <Avatar className='h-8 w-8'>
                        <AvatarImage src='/herman-profile-v3.jpg' />
                        <AvatarFallback>HA</AvatarFallback>
                      </Avatar>
                      <span className=''>Herman Adu</span>
                    </div>
                    <div>
                      <ChevronUp className='' size={16} />
                    </div>
                  </div>
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
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
