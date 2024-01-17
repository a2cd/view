import { staticRoutes } from '../routes'

const mixinRoutes = [...staticRoutes]

const appClientMenus = mixinRoutes.map(el => {
  const { name, path, meta, redirect, children } = el
  return {
    name,
    path,
    meta,
    redirect,
    children,
  }
})

export default appClientMenus
