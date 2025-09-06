
import { Fire } from "@/utils/Arrows";

const navItems = [
  {
    label: 'Deal',
    icon: <Fire />,
    dropdown: false,
  },
  {
    label: 'Home',
    dropdown: true,
    content: [{ url: "#", name: 'Sub Home 1' }, { url: "#", name: 'Sub Home 2' }, { url: "#", name: 'Sub Home 3' }],
  },
  {
    label: 'About',
    dropdown: false,
  },
  {
    label: 'Shop',
    dropdown: true,
    content: [{ url: "#", name: 'All Products' }, { url: "#", name: 'Featured' }, { url: "#", name: 'Categories' }],
  },
  {
    label: 'Vendors',
    dropdown: true,
    content: [{ url: "/venders-list", name: 'Vendor List' }, { url: "#", name: 'Vendor Profile' }],
  },
  {
    label: 'Mega Menu',
    dropdown: true,
    content: [],
  },
  {
    label: 'Blog',
    dropdown: true,
    content: [{ url: "/all-blogs", name: 'Latest Posts' }, { url: "#", name: 'Categories' }, { url: "#", name: 'Archives' }],
  },
  {
    label: 'Pages',
    dropdown: true,
    // content: ['FAQ', 'Privacy Policy', 'Terms & Conditions'],
    content: [
      { url: '/about-us', name: 'About us' },
      { url: '/contact', name: 'Contact' },
      { url: '/dashboard', name: 'My Account' },
      { url: '/login', name: 'Login' },
      { url: '/registration', name: 'Register' },
      { url: '/forget-password', name: 'Forget Password' },
      { url: '/reset-password', name: 'Reset Password' },
      { url: '/purchase-guide', name: 'Purchase Guide' },
      { url: '/privacy-policy', name: 'Privacy Policy' },
      { url: '/terms-service', name: 'Terms of Service' },
      { url: '/404', name: '404 Page' },
    ],
  },
  {
    label: 'Contact',
    dropdown: false,
    page: '/contact'
  },
];

export default navItems;
