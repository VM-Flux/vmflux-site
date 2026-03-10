export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export const navItems: NavItem[] = [
  { label: 'Products', href: '/products', order: 1 },
  { label: 'Solutions', href: '/solutions', order: 2 },
  { label: 'Resources', href: '/resources', order: 3 },
  { label: 'About', href: '/about', order: 4 },
];

/**
 * Get navigation items sorted by order
 */
export function getNavItems(): NavItem[] {
  return [...navItems].sort((a, b) => a.order - b.order);
}