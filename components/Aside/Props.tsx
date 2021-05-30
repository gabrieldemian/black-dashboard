export interface Props {
  className?: string
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
]