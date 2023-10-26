import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: 'mdi:archive-outline',
      path: '/admin'
    },
    {
      sectionTitle: 'Auth'
    },
    {
      title: 'Flow Control',
      children: [
        {
          title: 'Event Actions',
          icon: 'mdi:archive-outline',
          path: '/admin/auth4flow/nfts'
        },
        {
          title: 'Script Verifiers',
          icon: 'mdi:archive-outline',
          path: '/admin/auth4flow/nfts/verifiers'
        }
      ]
    },
    {
      title: 'Users & Tenants',
      children: [
        {
          title: 'Users',
          icon: 'mdi:archive-outline',
          path: '/admin/auth4flow/users'
        },
        {
          title: 'Tenants',
          icon: 'mdi:archive-outline',
          path: '#'
        }
      ]
    },
    {
      title: 'Role Based Control',
      children: [
        {
          title: 'Roles',
          icon: 'mdi:archive-outline',
          path: '/admin/auth4flow/rbac/roles'
        },
        {
          title: 'Permissions',
          icon: 'mdi:archive-outline',
          path: '/admin/auth4flow/rbac/permissions'
        },
        {
          title: 'Check',
          icon: 'mdi:archive-outline',
          path: '/admin/auth4flow/rbac/check'
        }
      ]
    },
    {
      title: 'Fine Grained Control',
      children: [
        {
          title: 'Object Types',
          icon: 'mdi:archive-outline',
          path: '/admin/auth4flow/fgac/object-types'
        },
        {
          title: 'Objects',
          path: '/admin/auth4flow/fgac/objects',
          icon: 'mdi:archive-outline'
        },
        {
          title: 'Check',
          icon: 'mdi:archive-outline',
          path: '/admin/auth4flow/fgac/check'
        }
      ]
    },
    {
      title: 'Pricing Tiers and Features',
      children: [
        {
          title: 'Pricing Tiers',
          icon: 'mdi:archive-outline',
          path: '#'
        },
        {
          title: 'Features',
          path: '#',
          icon: 'mdi:archive-outline'
        },
        {
          title: 'Check',
          icon: 'mdi:archive-outline',
          path: '#'
        }
      ]
    },
    {
      sectionTitle: 'Alerts'
    },
    {
      title: 'Flow Events',
      icon: 'mdi:archive-outline',
      path: '/admin/alerts4flow/monitors'
    },
    {
      title: 'Forge Events',
      icon: 'mdi:archive-outline',
      path: '/admin/alerts4flow/monitors',
      disabled: true,
      badgeContent: 'Coming Soon'
    }
  ]
}

export default navigation
