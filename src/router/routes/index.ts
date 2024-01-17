import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

const publicModules = import.meta.glob('./public/*.ts', { eager: true })
const staticModules = import.meta.glob('./static/*.ts', { eager: true })

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach(key => {
    const defaultModule = _modules[key].default
    if (!defaultModule) return
    const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
    result.push(...moduleList)
  })
  return result
}

function findChildrenNameWithRecursion(children: RouteRecordRaw[], set: Set<string>) {
  for (let i = 0; i < children.length; i += 1) {
    if (children[i].name) {
      set.add(<string>children[i].name)
    }
    const c = children[i].children || []
    if (c.length > 0) findChildrenNameWithRecursion(c, set)
  }
}

function genRouteNameSet(_modules: any) {
  const set = new Set<string>()
  Object.keys(_modules).forEach(key => {
    const defaultModule = _modules[key].default
    if (!defaultModule) return
    const routeRecord = defaultModule as RouteRecordRaw
    if (routeRecord.name) {
      set.add(<string>routeRecord.name)
    }
    if (routeRecord.children && routeRecord.children.length > 0) {
      findChildrenNameWithRecursion(routeRecord.children, set)
    }
  })
  return set
}

export const publicRouteNameSet: Set<string> = genRouteNameSet(publicModules)

export const publicRoutes: RouteRecordNormalized[] = formatModules(publicModules, [])

export const staticRoutes: RouteRecordNormalized[] = formatModules(staticModules, [])
