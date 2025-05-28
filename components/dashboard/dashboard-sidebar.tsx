import {
  //Calendar,
  //Home,
  //Inbox,
  //ArrowLeft,
  //Flag,
  //History,
  //Search,
  //Settings,
  ChevronDown,
  //User2,
  ChevronUp,
  ShieldCheck,
  //Cog,
  LogOut,
  LogIn
  //DoorOpenIcon
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
//import Link from 'next/link'
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
//import Image from 'next/image'
import { Icons } from '@/components/icons'
import { NavUser } from '../nav-user'

// dashboard menu items.
const dashboardItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Icons.reactIcon
  }
]

// react fundamentals menu items.
const reactFundamentalsMenuItems = [
  {
    title: 'Introduction',
    url: '/dashboard/react-fundamentals/introduction',
    icon: Icons.hopOff
  },
  {
    title: 'Components',
    url: '/dashboard/react-fundamentals/react-components',
    icon: Icons.component
  },
  {
    title: 'JSX',
    url: '/dashboard/react-fundamentals/jsx',
    icon: Icons.jsx
  },
  {
    title: 'Props',
    url: '/dashboard/react-fundamentals/props',
    icon: Icons.props
  },
  {
    title: 'State',
    url: '/dashboard/react-fundamentals/state',
    icon: Icons.state
  },
  {
    title: 'Virtual Dom',
    url: '/dashboard/react-fundamentals/virtual-dom',
    icon: Icons.virtualDom
  },
  {
    title: 'Conditional Rendering',
    url: '/dashboard/react-fundamentals/conditional-rendering',
    icon: Icons.conditionalRendering
  }
]

// react hook menu items.
const reactHookMeunItems = [
  {
    title: 'useState',
    url: '/dashboard/react-hooks/use-state',
    icon: Icons.useState
  },
  {
    title: 'useEffect',
    url: '/dashboard/react-hooks/use-effect',
    icon: Icons.useEffect
  },
  {
    title: 'useContext',
    url: '/dashboard/react-hooks/use-context',
    icon: Icons.useContext
  },
  {
    title: 'useReducer',
    url: '/dashboard/react-hooks/use-reducer',
    icon: Icons.useReducer
  },
  {
    title: 'useCallback',
    url: '/dashboard/react-hooks/use-callback',
    icon: Icons.callbackHook
  },
  {
    title: 'useMemo',
    url: '/dashboard/react-hooks/use-memo',
    icon: Icons.useMemo
  },
  {
    title: 'useRef',
    url: '/dashboard/react-hooks/use-ref',
    icon: Icons.useRef
  },
  {
    title: 'useTransition',
    url: '/dashboard/react-hooks/use-transition',
    icon: Icons.useTransistion
  },
  {
    title: 'useId',
    url: '/dashboard/react-hooks/use-id',
    icon: Icons.useId
  }
]

// advance concepts menu items.
const advanceConceptsMeunItems = [
  {
    title: 'Custom Hooks',
    url: '/dashboard/advance-concepts/custom-hooks',
    icon: Icons.customHook
  },
  {
    title: 'Design Patterns',
    url: '/dashboard/advance-concepts/design-patterns',
    icon: Icons.designPatterns
  },
  {
    title: 'Optimisation',
    url: '/dashboard/advance-concepts/optimisation',
    icon: Icons.optimisation
  }
]

// footer menu items.
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

// This is sample data.
const data = {
  user: {
    name: 'Adu Dev',
    email: 'herman@adudev.co.uk',
    avatar: '/avatars/shadcn.jpg'
  }
}

export function DashboardSidebar() {
  return (
    <Sidebar collapsible='icon' variant='inset'>
      <SidebarHeader className='h-16 border-b border-sidebar-border'>
        <NavUser user={data.user} />
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
          <Collapsible defaultOpen={true} className='group/collapsible'>
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
          <Collapsible defaultOpen={true} className='group/collapsible'>
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
                <SidebarMenuButton className='h-8'>
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
