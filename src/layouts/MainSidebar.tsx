import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FileText,
  BarChart3,
  Settings,
  Building2,
  Users,
  ClipboardList,
  Bell,
  ChevronDown,
  ChevronRight,
  User,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  current: boolean;
  children?: NavigationItem[];
}

// Fixed icon-only sidebar section
const IconSidebar = ({
  isContentVisible,
  setIsContentVisible
}: {
  isContentVisible: boolean;
  setIsContentVisible: (visible: boolean) => void;
}) => {
  const location = useLocation();

  const navigation: NavigationItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      current: location.pathname === '/'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Building2,
      current: location.pathname.startsWith('/services')
    },
    {
      name: 'Documents',
      href: '/documents',
      icon: FileText,
      current: location.pathname.startsWith('/documents')
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: BarChart3,
      current: location.pathname.startsWith('/dashboard'),
      children: [
        {
          name: 'Overview',
          href: '/dashboard',
          icon: BarChart3,
          current: location.pathname === '/dashboard'
        },
        {
          name: 'Analytics',
          href: '/dashboard/analytics',
          icon: BarChart3,
          current: location.pathname === '/dashboard/analytics'
        },
        {
          name: 'Recent Documents',
          href: '/dashboard/recent-documents',
          icon: ClipboardList,
          current: location.pathname === '/dashboard/recent-documents'
        },
        {
          name: 'User Overview',
          href: '/dashboard/user-overview',
          icon: Users,
          current: location.pathname === '/dashboard/user-overview'
        }
      ]
    }
  ];

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="flex h-full w-12 flex-col py-4 border-r">
      {/* Collapse/Expand Button */}
      <div className="flex justify-center mb-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={toggleContentVisibility}
          title={isContentVisible ? "Collapse content" : "Expand content"}
        >
          {isContentVisible ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : (
            <PanelLeftOpen className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-2">
        {navigation.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isActive = item.current || (hasChildren && item.children?.some(child => child.current));

          if (hasChildren) {
            return (
              <div key={item.name} className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 ${isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''}`}
                  title={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </Button>
              </div>
            );
          }

          return (
            <Button
              key={item.name}
              variant="ghost"
              size="icon"
              className={`h-10 w-10 ${isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''}`}
              title={item.name}
              asChild
            >
              <Link to={item.href}>
                <item.icon className="h-5 w-5" />
              </Link>
            </Button>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col items-center space-y-2">
        <Button
          variant="ghost"
          size="icon"
          className={`h-10 w-10 ${location.pathname.startsWith('/settings') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''}`}
          title="Settings"
          asChild
        >
          <Link to="/settings">
            <Settings className="h-5 w-5" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`h-10 w-10 ${location.pathname.startsWith('/notifications') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''}`}
          title="Notifications"
          asChild
        >
          <Link to="/notifications">
            <Bell className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

// Resizable content sidebar section
const ContentSidebar = () => {
  const location = useLocation();

  const navigation: NavigationItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      current: location.pathname === '/'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Building2,
      current: location.pathname.startsWith('/services')
    },
    {
      name: 'Documents',
      href: '/documents',
      icon: FileText,
      current: location.pathname.startsWith('/documents')
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: BarChart3,
      current: location.pathname.startsWith('/dashboard'),
      children: [
        {
          name: 'Overview',
          href: '/dashboard',
          icon: BarChart3,
          current: location.pathname === '/dashboard'
        },
        {
          name: 'Analytics',
          href: '/dashboard/analytics',
          icon: BarChart3,
          current: location.pathname === '/dashboard/analytics'
        },
        {
          name: 'Recent Documents',
          href: '/dashboard/recent-documents',
          icon: ClipboardList,
          current: location.pathname === '/dashboard/recent-documents'
        },
        {
          name: 'User Overview',
          href: '/dashboard/user-overview',
          icon: Users,
          current: location.pathname === '/dashboard/user-overview'
        }
      ]
    }
  ];

  return (
    <>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-sm">KD</span>
            </div>
            <span className="font-semibold sidebar-brand-text">KD Documentify</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isActive = item.current || (hasChildren && item.children?.some(child => child.current));

                if (hasChildren) {
                  return (
                    <Collapsible key={item.name} asChild defaultOpen={isActive} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.name} isActive={isActive}>
                            <item.icon className="size-4 flex-shrink-0" />
                            <span className="sidebar-nav-text">{item.name}</span>
                            <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 flex-shrink-0" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children?.map((child) => (
                              <SidebarMenuSubItem key={child.name}>
                                <SidebarMenuSubButton asChild isActive={child.current}>
                                  <Link to={child.href}>
                                    <child.icon className="size-4 flex-shrink-0" />
                                    <span className="sidebar-nav-text">{child.name}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton tooltip={item.name} asChild isActive={isActive}>
                      <Link to={item.href}>
                        <item.icon className="size-4 flex-shrink-0" />
                        <span className="sidebar-nav-text">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings" asChild isActive={location.pathname.startsWith('/settings')}>
                  <Link to="/settings">
                    <Settings className="size-4 flex-shrink-0" />
                    <span className="sidebar-nav-text">Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Notifications" asChild isActive={location.pathname.startsWith('/notifications')}>
                  <Link to="/notifications">
                    <Bell className="size-4 flex-shrink-0" />
                    <span className="sidebar-nav-text">Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src="/avatars/01.png" alt="User" />
                    <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight min-w-0">
                    <span className="sidebar-user-text font-semibold">John Doe</span>
                    <span className="sidebar-user-text text-xs text-muted-foreground">john.doe@example.com</span>
                  </div>
                  <ChevronDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src="/avatars/01.png" alt="User" />
                      <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">JD</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight min-w-0">
                      <span className="sidebar-user-text font-semibold">John Doe</span>
                      <span className="sidebar-user-text text-xs text-muted-foreground">john.doe@example.com</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </>
  );
};

const MainSidebarContent = () => {
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className="h-full flex">
      <div className="w-12 flex-shrink-0">
        <IconSidebar
          isContentVisible={!isCollapsed}
          setIsContentVisible={toggleSidebar}
        />
      </div>

      {!isCollapsed && (
        <div className="flex-1 min-w-0">
          <ContentSidebar />
        </div>
      )}
    </div>
  );
};

export { MainSidebarContent };