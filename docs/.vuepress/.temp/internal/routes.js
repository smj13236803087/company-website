export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Applications/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/Applications/vuepress-starter/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"关于我们"} }],
  ["/contact.html", { loader: () => import(/* webpackChunkName: "contact.html" */"/Applications/vuepress-starter/docs/.vuepress/.temp/pages/contact.html.js"), meta: {"title":"联系我们"} }],
  ["/products.html", { loader: () => import(/* webpackChunkName: "products.html" */"/Applications/vuepress-starter/docs/.vuepress/.temp/pages/products.html.js"), meta: {"title":"产品与服务"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Applications/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
