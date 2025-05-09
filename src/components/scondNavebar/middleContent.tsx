// import { Fire } from "@/utils/Arrows";

// const navItems = [
//   {
//     label: 'Deal',
//     icon: <Fire />,
//     dropdown: false,
//     content:[]
//   },
//   {
//     label: 'Home',
//     dropdown: true,
//   },
//   {
//     label: 'About',
//     dropdown: false,
//   },
//   {
//     label: 'Shop',
//     dropdown: true,
//   },
//   {
//     label: 'Vendors',
//     dropdown: true,
//   },
//   {
//     label: 'Mega Menu',
//     dropdown: true,
//   },
//   {
//     label: 'Blog',
//     dropdown: true,
//   },
//   {
//     label: 'Pages',
//     dropdown: true,
//   },
//   {
//     label: 'Contact',
//     dropdown: false,
//   },
// ]
// export default navItems;
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
    content: ['Sub Home 1', 'Sub Home 2', 'Sub Home 3'],
  },
  {
    label: 'About',
    dropdown: false,
  },
  {
    label: 'Shop',
    dropdown: true,
    content: ['All Products', 'Featured', 'Categories'],
  },
  {
    label: 'Vendors',
    dropdown: true,
    content: ['Vendor List', 'Vendor Profile'],
  },
  {
    label: 'Mega Menu',
    dropdown: true,
    content: ['Category 1', 'Category 2', 'Category 3'],
  },
  {
    label: 'Blog',
    dropdown: true,
    content: ['Latest Posts', 'Categories', 'Archives'],
  },
  {
    label: 'Pages',
    dropdown: true,
    content: ['FAQ', 'Privacy Policy', 'Terms & Conditions'],
  },
  {
    label: 'Contact',
    dropdown: false,
    page: '/contact'
  },
];

export default navItems;
