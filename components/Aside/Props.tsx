
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
    name: 'User Profile',
    href: '/profile',
    icon: 'user',
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: 'message',
  },
  {
    name: 'Clients',
    href: '/clients',
    icon: 'users',
  },
]