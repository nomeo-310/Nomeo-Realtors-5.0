export interface navbarItem {
  label:string,
  path:string
}

export const navBarList:navbarItem[] = [
  {label: 'buy', path: '/buy'},
  {label: 'rent', path: '/rent'},
  {label: 'about us', path: '/about-us'},
  {label: 'blog', path: '/blog'},
  {label: 'search', path: '/search'}
];