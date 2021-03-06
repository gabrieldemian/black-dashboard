
export interface Props {
  className?: string
  ref?: any
}

interface Item {
  name: string
  href: string
  icon: string
}

export const asideItems: Item[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: 'dashboard',
  },
  {
    name: 'Clients',
    href: '/clients',
    icon: 'users',
  },
]

export const endItems: Item[] = [
  {
    name: 'Logout',
    href: '/',
    icon: 'logout'
  },
  {
    name: 'Settings',
    href: '/',
    icon: 'cog'
  }
]