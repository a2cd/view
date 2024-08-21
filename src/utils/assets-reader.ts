export const getAssetsUrl = (path: string): string => {
    if (path == undefined) return '';
    if (!path.startsWith('/')) path = '/' + path;
    // 20240821 bug 不能使用`../assets${path}`作为参数
    return new URL('../assets' + path, import.meta.url).href;
};












